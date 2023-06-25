
                    //fetching all users from a REST API
                    fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(users => showUsers(users));
                    function showUsers(users) {
                        const ul = document.createElement("ul");
                        for (let user of users) {
                            const li = document.createElement("li");
                            li.innerText = user.name;
                            ul.appendChild(li);
                        } result.appendChild(ul);
                    }
                    // let's filter users list
                    textBox.oninput = filterUsers;
                    function filterUsers(){
                        const liElements = document.querySelectorAll("li");
                        for (let li of liElements){
                            const currentName = li.innerText.toLowerCase();
                            const searchText = this.value.toLowerCase();
                            if (!currentName.includes(searchText))
                            li.setAttribute('hidden', true);
                            else li.removeAttribute('hidden');
                        }
                    }
                