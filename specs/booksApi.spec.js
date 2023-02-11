import bookstore from "./framework/services/bookstore";
import account from "./framework/services/user";
import createBooksCollection from "./framework/utils/helpers";
import { createUser } from "./framework/utils/generators";

describe("books API tests", () => {
    let userData;
    const booksData = [
        {
            isbn: "9781593277574",
            title: "Understanding ECMAScript 6"
        },
        {
            isbn: "9781449337711",
            title: "Designing Evolvable Web APIs with ASP.NET"
        }
    ];

    beforeAll(async () => {
        const user = createUser().getData();
        userData = await account.createUserWithToken(user);
    });

    afterAll(async () => {
        await account.deleteUser(userData.uuid, userData.token);
    });

    describe("POST /bookStore/v1/books", () => {
        it("Creates books list(201)", async () => {
            const booksCollection = createBooksCollection([booksData[0].isbn])

            const res = await bookstore.addListOfBooks(userData.uuid, userData.token, booksCollection);
            expect(res.status).toEqual(201);
            expect(res.body.books).toMa;

            await bookstore.deleteBooksList(userData.uuid, userData.token);
        });

        it("Doesn't create list if Unauthorized(401)", async () => {
            const booksCollection = createBooksCollection([booksData[0].isbn])

            const res = await bookstore.addListOfBooks(userData.uuid, "", booksCollection);
            expect(res.status).toEqual(401);
            // expect(res.body).toMatchSnapshot(); quick check, better use scheme
        });

        it("Doesn't create list if list empty(400)", async () => {
            const booksCollection = [];
            const res = await bookstore.addListOfBooks(userData.uuid, userData.token, booksCollection);
            expect(res.status).toEqual(400);
            expect(res.body).toEqual({ code: '1207', message: 'Collection of books required.' });
        });

        it("Doesn't create list if ISBN is already in the list(400)", async () => {
            const booksCollection = createBooksCollection([booksData[0].isbn])

            await bookstore.addListOfBooks(userData.uuid, userData.token, booksCollection);
            const res = await bookstore.addListOfBooks(userData.uuid, userData.token, booksCollection);
            expect(res.status).toEqual(400);
            expect(res.body).toEqual({
                code: '1210',
                message: "ISBN already present in the User's Collection!"
            });
        });

        it("Doesn't create list if ISBN not exists(400)", async () => {
            const booksCollection = createBooksCollection(["isbn"])

            const res = await bookstore.addListOfBooks(userData.uuid, userData.token, booksCollection);
            expect(res.status).toEqual(400);
            expect(res.body).toEqual({
                code: '1205',
                message: 'ISBN supplied is not available in Books Collection!'
            });
        });
    })

    describe("PUT /bookStore/v1/books/{ISBN}", () => {
        it("Updates book (200)", async () => {
            const booksCollection = createBooksCollection([booksData[1].isbn])
            const payload =
            {
                userId: userData.uuid,
                isbn: booksData[0].isbn
            };

            await bookstore.addListOfBooks(userData.uuid, userData.token, booksCollection);
            const res = await bookstore.updateBook(payload, userData.token, booksData[1].isbn);
            expect(res.status).toEqual(200);
            expect(res.body.books.find((book) => book.isbn === booksData[1].isbn)).toBeUndefined()
            expect(res.body.books.find((book) => book.isbn === booksData[0].isbn)).toBeTruthy();

            await bookstore.deleteBooksList(userData.uuid, userData.token);
        });

        it("Doesn't update book if old == new ISBN (400)", async () => {
            const booksCollection = createBooksCollection([booksData[1].isbn])
            const payload =
            {
                userId: userData.uuid,
                isbn: booksData[1].isbn
            };

            await bookstore.addListOfBooks(userData.uuid, userData.token, booksCollection);
            const res = await bookstore.updateBook(payload, userData.token, booksData[1].isbn);
            console.log(res.status, res.body);
            expect(res.status).toEqual(400);
            expect(res.body).toEqual({
                code: "1206",
                message: "ISBN supplied is not available in User's Collection!"
            });
        });

        it("Doesn't update book ifUser not authorized (401)", async () => {
            const payload =
            {
                userId: userData.uuid,
                isbn: booksData[1].isbn
            };

            const res = await bookstore.updateBook(payload, '', booksData[1].isbn);
            console.log(res.status, res.body);
            expect(res.status).toEqual(401);
        });

        it("Doesn't update book if ISBN not exists (400)", async () => {
            const payload =
            {
                userId: userData.uuid,
                isbn: "isbn"
            };

            const res = await bookstore.updateBook(payload, userData.token, booksData[1].isbn);
            console.log(res.status, res.body);
            expect(res.status).toEqual(400);
            expect(res.body).toEqual({
                code: '1205',
                message: 'ISBN supplied is not available in Books Collection!'
            });
        });
    })

    describe("DELETE /bookStore/v1/book", () => {

        it("Deletes book (200)", async () => {
            const booksCollection = [
                {
                    isbn: booksData[1].isbn
                },
            ];
            const payload =
            {
                userId: userData.uuid,
                isbn: booksData[1].isbn
            };
            await bookstore.addListOfBooks(userData.uuid, userData.token, booksCollection);
            const res = await bookstore.deleteBook(payload, userData.token);
            expect(res.status).toEqual(204);
            expect(res.body).toEqual({});
        });

        it("Doesn't delete book if it is not in the list (400)", async () => {
            const booksCollection = [
                {
                    isbn: booksData[1].isbn
                },
            ];
            const payload =
            {
                userId: userData.uuid,
                isbn: booksData[0].isbn
            };
            await bookstore.addListOfBooks(userData.uuid, userData.token, booksCollection);
            const res = await bookstore.deleteBook(payload, userData.token);
            expect(res.status).toEqual(400);
            expect(res.body).toEqual({
                code: '1206',
                message: "ISBN supplied is not available in User's Collection!"
            });
        });

        it("Doesn't delete book if User not authorized (401)", async () => {
            const payload =
            {
                userId: userData.uuid,
                isbn: booksData[1].isbn
            };

            const res = await bookstore.deleteBook(payload, "");
            expect(res.status).toEqual(401);
        });
    })

    describe("GET /bookStore/v1/book", () => {
        it.each(booksData)(`Gets book ($isbn) info (200)`, async ({ isbn, title }) => {
            const res = await bookstore.getBookInfo(isbn);
            expect(res.status).toEqual(200);
            expect(res.body.title).toEqual(title);
        });

        it("Doesn't get books info if ISBN not exists (400)", async () => {
            const res = await bookstore.getBookInfo("isbn");
            expect(res.status).toEqual(400);
            expect(res.body).toEqual({
                code: '1205',
                message: 'ISBN supplied is not available in Books Collection!'
            });
        });
    })
});