function filterItems(category) {
    // Seleciona todos os itens nas seções
    const items = document.querySelectorAll('.itens > div');
  
    items.forEach(item => {
      // Remove a classe 'active' de todos os itens
      item.style.display = 'none';
  
      // Mostra apenas os itens da categoria ou todos
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      }
    });
  }
  