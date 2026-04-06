export default function BrowseBySection() {
  return (
    <section className="bg-white border-t border-gray-200 px-8 py-6">
      <div className="flex gap-8">
        <div className="shrink-0 w-36">
          <p className="text-xs font-extrabold text-gray-800 uppercase leading-tight tracking-wide">
            Browse
            <br />
            Matrimonial
            <br />
            Profiles By
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-1.5 text-xs text-gray-600">
          <div className="flex flex-wrap gap-x-1">
            {[
              "Mother tongue",
              "Tamil",
              "Gujarati",
              "Kannada",
              "Telugu",
              "Devi",
              "Punjabi",
              "Marathi",
              "Bengali",
              "Sindhi",
              "Malayalam",
              "Urdu",
            ].map((item, i, arr) => (
              <span key={item}>
                <a href="#" className="hover:text-[#c0174c] hover:underline">
                  {item}
                </a>
                {i < arr.length - 1 && (
                  <span className="text-gray-300 mx-0.5">|</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-1">
            {[
              "Community",
              "Agarwal",
              "Brahmin",
              "Punjabi",
              "Rajput",
              "Goswami",
            ].map((item, i, arr) => (
              <span key={item}>
                <a href="#" className="hover:text-[#c0174c] hover:underline">
                  {item}
                </a>
                {i < arr.length - 1 && (
                  <span className="text-gray-300 mx-0.5">|</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-1">
            {["Religion", "Hindu", "Sikh", "Muslim", "Christian", "Jain"].map(
              (item, i, arr) => (
                <span key={item}>
                  <a href="#" className="hover:text-[#c0174c] hover:underline">
                    {item}
                  </a>
                  {i < arr.length - 1 && (
                    <span className="text-gray-300 mx-0.5">|</span>
                  )}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="shrink-0">
          <a
            href="#"
            className="text-xs font-semibold text-gray-700 hover:text-[#c0174c]"
          >
            More
          </a>
        </div>
      </div>
    </section>
  );
}
