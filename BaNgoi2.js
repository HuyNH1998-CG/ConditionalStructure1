let login = prompt()
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
        'Greeting' :
        (login == '') ?
            'No login' :
            '';
alert(message)