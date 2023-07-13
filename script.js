<script>
    document.getElementById('survey-form').addEventListener('submit', function(event) {
      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var numberInput = document.getElementById('number');
      
      if (!nameInput.value || !emailInput.value || !numberInput.value) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios!');
      }
    });
  </script>
