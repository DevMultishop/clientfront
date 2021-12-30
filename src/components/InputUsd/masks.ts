/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  phone: (e: any) => {
    e.currentTarget.maxLength = 15;
    let { value } = e.currentTarget;
    value = value.replace(/\D/g, '');
    value = value.replace(/^0/, '');
    value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    value = value.slice(0, 15);
    e.currentTarget.value = value;
  },
  cpf: (e: any) => {
    let { value } = e.currentTarget;
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1-$2');

    value = value.slice(0, 14);
    e.currentTarget.value = value;
  },
};
