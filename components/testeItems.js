let criaItem = function( numeroTitle, testeTitle, labelTeste, testeId, numTesteId, valueItem ){
  let itemContainer = document.createElement("div");
  itemContainer.classList.add("teste-item");

  let itemTitleContainer = document.createElement("div");
  itemTitleContainer.classList.add("teste-option-title");
  let spanTitle = document.createElement("span");
  spanTitle.innerHTML = `${numeroTitle}. `;
  itemTitleContainer.appendChild(spanTitle);
  itemTitleContainer.innerHTML = testeTitle;

  let inputsContainer = document.createElement("div");
  inputsContainer.classList.add("teste-inputs-container");

  let inputItems = document.createElement("div");
  inputItems.classList.add("teste-inputs-item");
  let labelItem = document.createElement("label");
  labelItem.innerHTML = labelTeste;
  let checkbox = document.createElement("input");
  checkbox.classList.add(`checkbox${testeId}`);
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', `inputItem[${numTesteId}][]`);
  checkbox.setAttribute('value', valueItem);

  inputItems.appendChild(labelItem);
  inputItems.appendChild(checkbox);
  inputsContainer.appendChild(inputItems);

  itemContainer.appendChild(itemTitleContainer);
  itemContainer.appendChild(inputsContainer);

  return itemContainer;
}