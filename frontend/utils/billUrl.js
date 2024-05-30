export const companies = {
   11: 'lesco',
   12: 'gepco',
   13: 'fesco',
   14: 'iesco',
   15: 'mepco',
   26: 'pesco',
   37: 'hesco',
   38: 'sepco',
   48: 'qesco',
 };

function calculate(ref) {
    let type = 'general';
    let company = 'fesco';
    let url = '';
    const types = {
      0: 'industrial',
      1: 'general',
    };
    company = ref.replace(' ', '').slice(2, 4);
    type = ref.slice(0, 2);

    if (type > 20) {
      type = types['0'];
    } else {
      type = types['1'];
    }
    if (company === '11') {
      // specific for lesco
      url = `http://www.lesco.gov.pk:36247/BillNew.aspx?BatchNo=${ref.slice(
        0,
        2,
      )}&SubDiv=${ref.slice(2, 8).trim()}&RefNo=${ref
        .slice(8, 16)
        .trim()}&RU=U&Exec=941N7&nCtID=`;
    } else if (
      company === '26'
      || company === '37'
      || company === '38'
      || company === '48'
    ) {
      url = `https://bill.pitc.com.pk/${companies[company]}bill/${type}?refno=${ref}`;
    } else {
      url = `https://bill.pitc.com.pk/${companies[company]}bill/${type}/${ref}`;
    }
   return url;
  };

export const generateBillUrl = (consumerId) => {

   return calculate(consumerId)
  
}