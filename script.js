document.addEventListener('DOMContentLoaded', function() {
    const likeBtns = document.querySelectorAll('.like-btn');
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    const deleteBtns = document.querySelectorAll('.delete-btn');
    const totalPriceElement = document.querySelector('.total-price');
  
    // Event listeners for like buttons
    likeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        btn.classList.toggle('liked');
      });
    });
  
    // Event listeners for quantity buttons
    quantityBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const item = btn.closest('.item');
        const quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (btn.classList.contains('plus')) {
          quantity++;
        } else if (btn.classList.contains('minus')) {
          if (quantity > 1) {
            quantity--;
          }
        }
        quantityElement.textContent = quantity;
        updateTotalPrice();
      });
    });
  
    // Event listeners for delete buttons
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const item = btn.closest('.item');
        item.remove();
        updateTotalPrice();
      });
    });
  
    // Function to update total price
    function updateTotalPrice() {
      let totalPrice = 0;
      document.querySelectorAll('.item').forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseInt(item.querySelector('.item-price').textContent.slice(1)); // Remove $ sign
        totalPrice += quantity * price;
      });
      totalPriceElement.textContent = `$${totalPrice}`;
    }
  });