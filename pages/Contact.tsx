import Head from "next/head";
import SelectFormOrSuccess from "../components/Form/SelectFormOrSuccess";

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contact Us!</title>
      </Head>

      <div className="bg-yellow-400 min-h-screen flex justify-center items-center pt-16">
        <div className="bg-yellow-200 w-full h-3/4 p-8">
          <SelectFormOrSuccess />
        </div>
      </div>
    </div>
  );
};

export default Contact;
