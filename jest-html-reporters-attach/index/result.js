window.jest_html_reporters_callback__({"numFailedTestSuites":0,"numFailedTests":0,"numPassedTestSuites":2,"numPassedTests":36,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":2,"numTotalTests":36,"startTime":1676883138766,"success":false,"testResults":[{"leaks":false,"numFailingTests":0,"numPassingTests":21,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1676883158192,"runtime":19363,"slow":true,"start":1676883138829},"skipped":false,"testFilePath":"/home/runner/work/qajs-2022-11/qajs-2022-11/specs/booksApi.spec.js","testResults":[{"rowKey":0,"ancestorTitles":["POST /bookStore/v1/books"],"duration":997,"failureDetails":[],"failureMessages":[],"fullName":"POST /bookStore/v1/books  Creates books list(201)","location":null,"numPassingAsserts":0,"status":"passed","title":" Creates books list(201)"},{"rowKey":1,"ancestorTitles":["POST /bookStore/v1/books"],"duration":483,"failureDetails":[],"failureMessages":[],"fullName":"POST /bookStore/v1/books  Doesn't create list if Unauthorized(401)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't create list if Unauthorized(401)"},{"rowKey":2,"ancestorTitles":["POST /bookStore/v1/books"],"duration":448,"failureDetails":[],"failureMessages":[],"fullName":"POST /bookStore/v1/books  Doesn't create list if list empty(400)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't create list if list empty(400)"},{"rowKey":3,"ancestorTitles":["POST /bookStore/v1/books"],"duration":940,"failureDetails":[],"failureMessages":[],"fullName":"POST /bookStore/v1/books  Doesn't create list if ISBN is already in the list(400)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't create list if ISBN is already in the list(400)"},{"rowKey":4,"ancestorTitles":["POST /bookStore/v1/books"],"duration":467,"failureDetails":[],"failureMessages":[],"fullName":"POST /bookStore/v1/books  Doesn't create list if ISBN not exists(400)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't create list if ISBN not exists(400)"},{"rowKey":5,"ancestorTitles":["PUT /bookStore/v1/books/{ISBN}"],"duration":1505,"failureDetails":[],"failureMessages":[],"fullName":"PUT /bookStore/v1/books/{ISBN}  Updates book (200)","location":null,"numPassingAsserts":0,"status":"passed","title":" Updates book (200)"},{"rowKey":6,"ancestorTitles":["PUT /bookStore/v1/books/{ISBN}"],"duration":988,"failureDetails":[],"failureMessages":[],"fullName":"PUT /bookStore/v1/books/{ISBN}  Doesn't update book if old == new ISBN (400)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't update book if old == new ISBN (400)"},{"rowKey":7,"ancestorTitles":["PUT /bookStore/v1/books/{ISBN}"],"duration":489,"failureDetails":[],"failureMessages":[],"fullName":"PUT /bookStore/v1/books/{ISBN}  Doesn't update book if User not authorized (401)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't update book if User not authorized (401)"},{"rowKey":8,"ancestorTitles":["PUT /bookStore/v1/books/{ISBN}"],"duration":455,"failureDetails":[],"failureMessages":[],"fullName":"PUT /bookStore/v1/books/{ISBN}  Doesn't update book if ISBN not exists (400)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't update book if ISBN not exists (400)"},{"rowKey":9,"ancestorTitles":["DELETE /bookStore/v1/book"],"duration":982,"failureDetails":[],"failureMessages":[],"fullName":"DELETE /bookStore/v1/book  Deletes book (200)","location":null,"numPassingAsserts":0,"status":"passed","title":" Deletes book (200)"},{"rowKey":10,"ancestorTitles":["DELETE /bookStore/v1/book"],"duration":973,"failureDetails":[],"failureMessages":[],"fullName":"DELETE /bookStore/v1/book  Doesn't delete book if it is not in the list (400)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't delete book if it is not in the list (400)"},{"rowKey":11,"ancestorTitles":["DELETE /bookStore/v1/book"],"duration":466,"failureDetails":[],"failureMessages":[],"fullName":"DELETE /bookStore/v1/book Doesn't delete book if User not authorized (401)","location":null,"numPassingAsserts":0,"status":"passed","title":"Doesn't delete book if User not authorized (401)"},{"rowKey":12,"ancestorTitles":["GET /bookStore/v1/book"],"duration":504,"failureDetails":[],"failureMessages":[],"fullName":"GET /bookStore/v1/book Gets book (9781449325862) info (200)","location":null,"numPassingAsserts":0,"status":"passed","title":"Gets book (9781449325862) info (200)"},{"rowKey":13,"ancestorTitles":["GET /bookStore/v1/book"],"duration":454,"failureDetails":[],"failureMessages":[],"fullName":"GET /bookStore/v1/book Gets book (9781449331818) info (200)","location":null,"numPassingAsserts":0,"status":"passed","title":"Gets book (9781449331818) info (200)"},{"rowKey":14,"ancestorTitles":["GET /bookStore/v1/book"],"duration":454,"failureDetails":[],"failureMessages":[],"fullName":"GET /bookStore/v1/book Gets book (9781449337711) info (200)","location":null,"numPassingAsserts":0,"status":"passed","title":"Gets book (9781449337711) info (200)"},{"rowKey":15,"ancestorTitles":["GET /bookStore/v1/book"],"duration":448,"failureDetails":[],"failureMessages":[],"fullName":"GET /bookStore/v1/book Gets book (9781449365035) info (200)","location":null,"numPassingAsserts":0,"status":"passed","title":"Gets book (9781449365035) info (200)"},{"rowKey":16,"ancestorTitles":["GET /bookStore/v1/book"],"duration":451,"failureDetails":[],"failureMessages":[],"fullName":"GET /bookStore/v1/book Gets book (9781491904244) info (200)","location":null,"numPassingAsserts":0,"status":"passed","title":"Gets book (9781491904244) info (200)"},{"rowKey":17,"ancestorTitles":["GET /bookStore/v1/book"],"duration":449,"failureDetails":[],"failureMessages":[],"fullName":"GET /bookStore/v1/book Gets book (9781491950296) info (200)","location":null,"numPassingAsserts":0,"status":"passed","title":"Gets book (9781491950296) info (200)"},{"rowKey":18,"ancestorTitles":["GET /bookStore/v1/book"],"duration":453,"failureDetails":[],"failureMessages":[],"fullName":"GET /bookStore/v1/book Gets book (9781593275846) info (200)","location":null,"numPassingAsserts":0,"status":"passed","title":"Gets book (9781593275846) info (200)"},{"rowKey":19,"ancestorTitles":["GET /bookStore/v1/book"],"duration":451,"failureDetails":[],"failureMessages":[],"fullName":"GET /bookStore/v1/book Gets book (9781593277574) info (200)","location":null,"numPassingAsserts":0,"status":"passed","title":"Gets book (9781593277574) info (200)"},{"rowKey":20,"ancestorTitles":["GET /bookStore/v1/book"],"duration":449,"failureDetails":[],"failureMessages":[],"fullName":"GET /bookStore/v1/book Doesn't get books info if ISBN not exists (400)","location":null,"numPassingAsserts":0,"status":"passed","title":"Doesn't get books info if ISBN not exists (400)"}],"failureMessage":null},{"leaks":false,"numFailingTests":0,"numPassingTests":15,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1676883171388,"runtime":13170,"slow":true,"start":1676883158218},"skipped":false,"testFilePath":"/home/runner/work/qajs-2022-11/qajs-2022-11/specs/userApi.spec.js","testResults":[{"rowKey":0,"ancestorTitles":["POST /account/v1/user"],"duration":1150,"failureDetails":[],"failureMessages":[],"fullName":"POST /account/v1/user  Creates user, valid password(201)","location":null,"numPassingAsserts":0,"status":"passed","title":" Creates user, valid password(201)"},{"rowKey":1,"ancestorTitles":["POST /account/v1/user"],"duration":487,"failureDetails":[],"failureMessages":[],"fullName":"POST /account/v1/user  Doesn't create user, User exists(406)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't create user, User exists(406)"},{"rowKey":2,"ancestorTitles":["POST /account/v1/user"],"duration":448,"failureDetails":[],"failureMessages":[],"fullName":"POST /account/v1/user  Doesn't create user, Invalid password(400)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't create user, Invalid password(400)"},{"rowKey":3,"ancestorTitles":["POST /account/v1/user"],"duration":448,"failureDetails":[],"failureMessages":[],"fullName":"POST /account/v1/user  Doesn't create user, Short password(400)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't create user, Short password(400)"},{"rowKey":4,"ancestorTitles":["DELETE /account/v1/user/{uuid}"],"duration":464,"failureDetails":[],"failureMessages":[],"fullName":"DELETE /account/v1/user/{uuid}  Doesn't delete user with invalid token(401)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't delete user with invalid token(401)"},{"rowKey":5,"ancestorTitles":["DELETE /account/v1/user/{uuid}"],"duration":451,"failureDetails":[],"failureMessages":[],"fullName":"DELETE /account/v1/user/{uuid}  Doesn't delete user with invalid user UUID(200)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't delete user with invalid user UUID(200)"},{"rowKey":6,"ancestorTitles":["DELETE /account/v1/user/{uuid}"],"duration":525,"failureDetails":[],"failureMessages":[],"fullName":"DELETE /account/v1/user/{uuid}  Deletes user with valid UUID & token(200)","location":null,"numPassingAsserts":0,"status":"passed","title":" Deletes user with valid UUID & token(200)"},{"rowKey":7,"ancestorTitles":["POST /account/v1/authorized"],"duration":524,"failureDetails":[],"failureMessages":[],"fullName":"POST /account/v1/authorized  Doesn't auth user if user doesn't exists(404)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't auth user if user doesn't exists(404)"},{"rowKey":8,"ancestorTitles":["POST /account/v1/authorized"],"duration":448,"failureDetails":[],"failureMessages":[],"fullName":"POST /account/v1/authorized  Doesn't auth user, empty payload(400)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't auth user, empty payload(400)"},{"rowKey":9,"ancestorTitles":["POST /account/v1/authorized"],"duration":456,"failureDetails":[],"failureMessages":[],"fullName":"POST /account/v1/authorized  Authorizes user with valid credentials(200)","location":null,"numPassingAsserts":0,"status":"passed","title":" Authorizes user with valid credentials(200)"},{"rowKey":10,"ancestorTitles":["POST /account/v1/generatetoken"],"duration":582,"failureDetails":[],"failureMessages":[],"fullName":"POST /account/v1/generatetoken  Generates new token, User exists(200)","location":null,"numPassingAsserts":0,"status":"passed","title":" Generates new token, User exists(200)"},{"rowKey":11,"ancestorTitles":["POST /account/v1/generatetoken"],"duration":580,"failureDetails":[],"failureMessages":[],"fullName":"POST /account/v1/generatetoken  Doesn't generates token if user doesn't exists(200)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't generates token if user doesn't exists(200)"},{"rowKey":12,"ancestorTitles":["GET /account/v1/user/{ uuid }"],"duration":472,"failureDetails":[],"failureMessages":[],"fullName":"GET /account/v1/user/{ uuid }  Gets user info if credentials are valid(200)","location":null,"numPassingAsserts":0,"status":"passed","title":" Gets user info if credentials are valid(200)"},{"rowKey":13,"ancestorTitles":["GET /account/v1/user/{ uuid }"],"duration":450,"failureDetails":[],"failureMessages":[],"fullName":"GET /account/v1/user/{ uuid }  Doesn't get user info if used invalid UUID(401)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't get user info if used invalid UUID(401)"},{"rowKey":14,"ancestorTitles":["GET /account/v1/user/{ uuid }"],"duration":474,"failureDetails":[],"failureMessages":[],"fullName":"GET /account/v1/user/{ uuid }  Doesn't get user info if used invalid token(401)","location":null,"numPassingAsserts":0,"status":"passed","title":" Doesn't get user info if used invalid token(401)"}],"failureMessage":null}],"wasInterrupted":false,"config":{"bail":0,"changedFilesWithAncestor":false,"ci":true,"collectCoverage":true,"collectCoverageFrom":["./src/**"],"coverageDirectory":"/home/runner/work/qajs-2022-11/qajs-2022-11/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":1,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/home/runner/work/qajs-2022-11/qajs-2022-11/node_modules/jest-html-reporters/index.js",{"publicPath":"./jest-html-report","filename":"index.html","openReport":true}],["/home/runner/work/qajs-2022-11/qajs-2022-11/node_modules/jest-allure/dist/index.js",{"publicPath":"./allure-report"}]],"rootDir":"/home/runner/work/qajs-2022-11/qajs-2022-11","runTestsByPath":false,"seed":-1193525274,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/home/runner/work/qajs-2022-11/qajs-2022-11/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"none","useStderr":false,"watch":false,"watchAll":false,"watchman":true,"coverageLinkPath":"../coverage/lcov-report/index.html"},"endTime":1676883171399,"_reporterOptions":{"publicPath":"./jest-html-report","filename":"index.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":true,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false},"logInfoMapping":{},"attachInfos":{}})