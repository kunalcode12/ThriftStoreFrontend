import React from "react";

const instagramImages = [
  {
    src: "https://scontent.cdninstagram.com/v/t51.75761-15/465951904_18426188002076339_3399455141444621880_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=tbwxaQUnANMQ7kNvgEnAJxc&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ArmJMABwZUTo163lPpgewL9&oh=00_AYCUXlRGs6eZunvd1wmUHZxCk0R1Q09yu9rcH2aU2xosEQ&oe=673BF00E",
    alt: "Person in plaid skirt and grey coat",
  },
  {
    src: "https://scontent.cdninstagram.com/v/t51.75761-15/465743664_18426028690076339_5111459465001220344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=BZYyzi8J8_UQ7kNvgG9xOPh&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ArmJMABwZUTo163lPpgewL9&oh=00_AYADuaZVxH0ybAg-fJhwXacYMVa95IkIwWQbLhspZrY3dQ&oe=673BEC23",
    alt: "Person in beige coat on cobblestone street",
  },
  {
    src: "https://scontent.cdninstagram.com/v/t51.29350-15/463885624_560108509749114_3247539067173904765_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=kje5ragd0iMQ7kNvgHmebT2&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ArmJMABwZUTo163lPpgewL9&oh=00_AYB0rkqEp6Toy0Lw6HCtEDglbbD6vWWTbfnUyTm3_fjoLQ&oe=673BD75D",
    alt: "Child holding yellow Thrift+ bag",
  },
  {
    src: "https://scontent.cdninstagram.com/v/t51.75761-15/463131868_18422184217076339_4622634191800588210_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=FerV__q8cRQQ7kNvgEFsNTB&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ArmJMABwZUTo163lPpgewL9&oh=00_AYDP3yOQ28scg9MuaXSMH2jp_P7xbH2-RW9pk72VMcNYEw&oe=673BF6D8",
    alt: "Person in purple outfit near fence",
  },
  {
    src: "https://scontent.cdninstagram.com/v/t39.30808-6/462211544_18420758500076339_8165495844006348524_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=Fi0MV2IVB3cQ7kNvgElgjGJ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ArmJMABwZUTo163lPpgewL9&oh=00_AYCqMtsCUA9qN7oP57hk2YUw_3LdMIRBpurdK0jPwE9dZw&oe=673BD6C3",
    alt: "Win your watchlist",
  },
  {
    src: "https://scontent.cdninstagram.com/v/t39.30808-6/461344800_18418727362076339_4025452299017531276_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=Wrl7xmuJuucQ7kNvgGdcKpn&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ArmJMABwZUTo163lPpgewL9&oh=00_AYC9C98j0UKLfSZuKAqk8j-xv4PMweDixlT3Te4nlCIjsw&oe=673BE02C",
    alt: "Mirror selfie in leopard print pants",
  },
  {
    src: "https://scontent.cdninstagram.com/v/t51.29350-15/460363570_431882569382872_2062532252289673644_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=9VUH1wyjna0Q7kNvgGkIJ0p&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ArmJMABwZUTo163lPpgewL9&oh=00_AYDwCc4iTd93UztaMpUaBtZgfmHxmN03hM_dcWaqen1A-Q&oe=673BF308",
    alt: "Person in bright pink dress",
  },
  {
    src: "https://scontent.cdninstagram.com/v/t39.30808-6/459821060_18416918617076339_4903397591934078011_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=V3pUIAIXfscQ7kNvgF7G0Wt&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ArmJMABwZUTo163lPpgewL9&oh=00_AYCf6Tbw6bwnCmlQpuhu1k_y6uvOTV1g6ZfXZXl-gpvHkQ&oe=673BE3E6",
    alt: "Person in jeans and white top on street",
  },
  {
    src: "https://scontent.cdninstagram.com/v/t51.29350-15/459104111_1043075760456370_1715599661727326234_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=kTz6PS3QgsoQ7kNvgGndDQz&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ArmJMABwZUTo163lPpgewL9&oh=00_AYBjIW4MhozwomWKJqyP5WSvW9bHWlgoSBO_k9lDViU_QQ&oe=673BCB0B",
    alt: "Person in yellow skirt and dark coat",
  },
];

export default function ThriftersInstagram() {
  const instagramLink = "https://www.instagram.com/_thrift.era_";

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        THRIFTERA ON INSTAGRAM
      </h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 pb-4">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href={instagramLink}
              className="flex-shrink-0 group relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-36 h-36 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              {index === 4 && (
                <div className="absolute inset-0 bg-yellow-400 flex items-center justify-center rounded-lg">
                  <p className="text-black text-sm font-bold text-center p-2">
                    WIN YOUR WATCHLIST.
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <a
          href={instagramLink}
          className="inline-flex items-center text-lg font-semibold hover:text-yellow-500 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="border-b-2 border-yellow-400">
            Find us @_thrift.era_
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
