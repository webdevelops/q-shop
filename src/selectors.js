
const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email.toString().toLowerCase());
}

export const validateControl = (value, validation, password) => {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (validation.email) {
    isValid = validateEmail(value) && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  if (validation.samePassword) {
    isValid = value === password && isValid;
  }

  return isValid;
}

export const getPhoneById = (state, id) =>
  state.phones.find(phone => phone.id === id);

export const getPhones = (state, { match }) => {
  const applySearch = phone => phone.name
    .toLowerCase()
    .indexOf(state.phonesPage.value.toLowerCase()) > -1;

  const activeCategory = match.params.id || undefined;
  const applyCategory = phone =>
    activeCategory === undefined || activeCategory === phone.categoryId;

  return state.phonesPage.ids
    .map(id => getPhoneById(state, id))
    .filter(applySearch)
    .filter(applyCategory);
};

export const getTotalBasketCount = state => state.basket.length;

export const getTotalBasketPrice = state => {
  const applyTotalSum = (sum, current) => sum + current;

  return state.basket
    .map(id => getPhoneById(state, id))
    .map(phone => phone.price)
    .reduce(applyTotalSum, 0);
};

export const getBasketPhonesWithCount = state => {
  const uniqueId = [...new Set(state.basket)];
  const phoneCount = id => state.basket.filter(basketId => basketId === id).length;

  return uniqueId
    .map(id => getPhoneById(state, id))
    .map(phone => ({ ...phone, count: phoneCount(phone.id) }));
};