const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9001',
        options : {
            'sonar.login' : '',
            'sonar.projectKey' : 'crudnode-api-test',
            'sonar.sources':  '.',
            'sonar.tests':  '.',
            'sonar.inclusions'  :  'index.js', 
            'sonar.test.inclusions':  'index.test.js',
            'sonar.javascript.lcov.reportPaths':  './coverage/lcov.info'
        }
    }, () => {});
