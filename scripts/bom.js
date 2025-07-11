
      const input = document.querySelector('#chapter');
      const addButton = document.querySelector('button');
      const list = document.querySelector('ul');

      input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          addItem();
        }
      });

      addButton.addEventListener('click', addItem);

      function addItem() {
        const itemText = input.value.trim();
        if (itemText === '') {
          alert('Please enter an chapter.');
          return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = itemText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
       removeButton.style.color = 'red';
        removeButton.addEventListener('click', function() {
          list.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        list.appendChild(listItem);

        input.value = '';
        input.focus();
      }
  