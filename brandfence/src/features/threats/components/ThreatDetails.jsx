import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";

const platformIcons = {
  facebook: <FaFacebookF className="text-[#1877F2] text-lg" />,
  instagram: <FaInstagram className="text-[#E4405F] text-lg" />,
  x: <FaXTwitter className="text-black text-lg" />,
};

export default function ThreatDetails({ threat }) {
  if (!threat) {
    return (
      <aside className="w-[420px] border-l bg-white p-6 text-gray-400">
        Select a threat
      </aside>
    );
  }

  return (
    <aside className="w-[524px] border-l bg-white p-6 mt-5 overflow-y-auto">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className=" font-semibold">{threat.name}</p>
          <p className="text-xs text-gray-500">{threat.date}</p>
        </div>
        <div className="flex gap-3">
          <button className="px-3 py-2 bg-[#1E64C8] text-white rounded-lg text-sm font-medium">
            Push To Production
          </button>
          <button className="px-3 py-2 border border-blue-200 text-[#3473CD] rounded-lg text-sm font-medium">
            <GoPencil />
          </button>
        </div>
      </div>

      <div className="flex gap-6 mb-6 text-sm">
        <span className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
          Details
        </span>
        <span className="text-gray-400">AI Recommendations</span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-xs">
        <Meta label="Mongo ID" value={threat.mongoId} />

        <Meta
          label="Threat Type"
          value={
            <span className="px-3 py-1 bg-[#EBEFF3] rounded-full text-[#2C2C2C] ">
              {threat.threatType}
            </span>
          }
        />

        <Meta
          label="Platforms"
          value={
            <div className="flex gap-2">
              {threat.platforms.map((p) => (
                <span
                  key={p}
                  className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-lg"
                >
                  {platformIcons[p]}
                </span>
              ))}
            </div>
          }
        />

        <Meta
          label="Status"
          value={
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {threat.status}
            </span>
          }
        />

        <Meta
          label="Redirected URLs"
          value={
            <a className="text-blue-600 bg-[#6A8BB91A] px-3 py-1 rounded-full underline">
              URL
            </a>
          }
        />

        <Meta
          label="Ad URL"
          value={
            <a className="text-blue-600 bg-[#6A8BB91A] px-3 py-1 rounded-full underline">
              URL
            </a>
          }
        />

        <Meta
          label="Runs Date"
          value={`${threat.runsFrom} to ${threat.runsTo}`}
        />

        <Meta
          label="Advertiser Profile Link"
          value={
            <a className="text-blue-600 bg-[#6A8BB91A] px-3 py-1 rounded-full underline">
              URL
            </a>
          }
        />

        <Meta
          label="Advertiser"
          value={<p className="text-sx">{threat.advertiser}</p>}
        />
        <Meta label="Paid for By" value={threat.paidForBy} />
      </div>

      {/* Indicators */}
      <div className="mt-6">
        <p className="text-gray-500 text-sm mb-2">Indicators</p>
        <div className="flex flex-wrap gap-2">
          {threat.indicators.map((item) => (
            <span
              key={item}
              className="px-3 py-1 border rounded-lg text-sm hover:bg-[#ECF4FF] hover:border-[#1E64C8] hover:text-[#1E64C8] cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-500 text-sm mb-1">Researcher’s Comment</p>
        <p className="text-sm">{threat.comment}</p>
      </div>
      <div className="mt-8 bg-gray-50 p-4 rounded-xl">
        <h3 className="font-semibold mb-2">Source Content</h3>

        <p className="font-medium mb-1">{threat.sourceContent.title}</p>
        <p className="text-sm text-gray-600 mb-4">
          {threat.sourceContent.description}
        </p>
        <div className="pb-2">Image</div>
        <div className="grid grid-cols-3 gap-3">
          {threat.sourceContent.images.map((img, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
    </aside>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 mb-1">{label}</p>
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
}
