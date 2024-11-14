import { assets } from "../assets/assets";

export default function Reviews() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">WHY USE THRIFTERA?</h2>

          <div className="flex items-start space-x-4">
            <img
              src={assets.Im1}
              height={150}
              width={150}
              alt="Folded clothes"
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">QUALITY ASSURED</h3>
              <p>
                We quality check every single item on Thrift+. No more surprise
                stains or fake brands.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src={assets.Im2}
              height={150}
              width={150}
              alt="Person holding yellow shopping bag"
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">HASSLE-FREE</h3>
              <p>
                Your pre-loved packages come straight from our warehouse. With
                moneyback guarantees and 30 day returns.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src={assets.Im3}
              height={150}
              width={150}
              alt="Two women in colorful clothes"
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">CLOSING THE LOOP</h3>
              <p>
                We make it easier to shop and resell pre-loved clothes. We
                partner with major brands to end fashion waste.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">
            HEAR IT FROM THE THRIFTERS
          </h2>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <div className="flex items-start space-x-4">
              <img
                src={assets.Im4}
                height={100}
                width={100}
                alt="Tracy"
                className="rounded-lg"
              />
              <div>
                <p className="mb-4">
                  "I love secondhand for so many reasons, you can get beautiful
                  vintage pieces that just aren't available anymore and buy
                  brands that you couldn't always afford new. It's also a lovely
                  way of looking after the environment and ensuring one more
                  thing doesn't end up in landfill."
                </p>
                <p className="font-bold">Tracy, @tracyheath_</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-grow">
                <p className="mb-4">
                  "Websites like ThriftEra mean buying new is no longer the only
                  easy option. I believe in quality over quantity and giving
                  clothes the longest life possible and Thrift+ makes it so
                  simple. I couldn't recommend ThriftEra enough, I've told all
                  my friends about it!"
                </p>
                <p className="font-bold">Kitty, @rabbit_testino</p>
              </div>
              <img
                src={assets.Im5}
                height={100}
                width={100}
                alt="Kitty"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
