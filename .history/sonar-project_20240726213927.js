const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        options : {
            'sonar.login' : 'sqp_23aec7152eba9778f6880c524469a25ddca70bf2',
            'sonar.projectKey' : 'crudnode-api-test',
            'sonar.sources':  '.',
            'sonar.tests':  '.',
            'sonar.inclusions'  :  'index.js', 
            'sonar.test.inclusions':  'index.test.js',
            'sonar.javascript.lcov.reportPaths':  './coverage/lcov.info'
        }
    }, () => {});
view raw