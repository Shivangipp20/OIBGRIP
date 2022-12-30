var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '*') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }




    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }
    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }