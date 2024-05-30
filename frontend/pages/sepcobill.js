
import {  RelatedContent, Banner } from '../components';
import Head from 'next/head';
import {useRouter} from 'next/router';
import OnlineBillInput from 'components/OnlineBillInput';

const SepcoBill = () => {
    const router = useRouter();
  //const title= window.location.pathname.split('/')[1]
  return (
    <>
    <Head>
      <title>Ses\pco Bill Online - Online Electricity Bills</title>
      <meta name="keywords" content="iescobill, mepcobill, pescobill, hescobill, sepcobill, qescobill, gepcobill, fescobill, tescobill"></meta>
      <meta name="description" content="Access and view online electricity bills of all electric companies in Pakistan. Easy, quick, and reliable."></meta>
      <meta name="keywords" content="Online Electricity Bill, IESCO Bill, MEPCO Bill, PESCO Bill, HESCO Bill, SEPCO Bill, QESCO Bill, GEPCO Bill, FESCO Bill, TESCO Bill, Pakistan Electricity"></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
      <meta name="language" content="English"></meta>
      <meta name="author" content="bijleghar"></meta>
    </Head>
    <div className="flexCenter">
      <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
        <Banner
          name={router.pathname.split('/')[1].replace("bill", " bill").toUpperCase() +" ONLINE"} // Change this line to {router.pathname.split('/')[1].to
          substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
          styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
        />
        <OnlineBillInput />
        <RelatedContent />
      </div>
    </div>
    </>
  );
};
export default SepcoBill;

// 20123151733300
// 20123151733301
