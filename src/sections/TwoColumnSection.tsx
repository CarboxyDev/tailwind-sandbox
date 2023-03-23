import Button from "../components/Button";

const TwoColumnSection = () => {
  return (
    <>
      <div className="grid grid-cols-none grid-rows-2 rounded-2xl border border-gray-300 lg:grid-cols-2 lg:grid-rows-none">
        <div className="flex flex-col items-center justify-center border-b border-gray-300 px-16 py-18 lg:border-r lg:border-b-0">
          <h2 className="text-center text-4xl font-semibold text-gray-600">
            Heading
          </h2>
          <p className="text-md mt-14 mb-8 max-w-xl text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            reprehenderit dignissimos, iste, laboriosam distinctio hic tempore
            ut delectus totam, assumenda natus. Neque aperiam doloribus
            assumenda.
          </p>
          <Button size="lg" variant="default">
            Button text
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center px-16 py-18">
          <h2 className="text-center text-4xl font-semibold text-gray-600">
            Another Heading
          </h2>
          <p className="text-md mt-14 mb-8 max-w-xl text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            reprehenderit dignissimos, iste, laboriosam distinctio hic tempore
            ut delectus totam, assumenda natus. Neque aperiam doloribus
            assumenda.
          </p>
          <Button size="lg" variant="default">
            Button text
          </Button>
        </div>
      </div>
    </>
  );
};

export default TwoColumnSection;
