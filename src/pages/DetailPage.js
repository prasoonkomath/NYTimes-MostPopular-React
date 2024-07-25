import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const params = useParams();
  return (
    <div className="pt-20">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full overflow-hidden">
            <div className="w-full py-3 mb-3">
              <h2 className="text-gray-800 text-3xl font-bold">
                <span className="inline-block h-5 bg-red-600 mr-2 w-1"></span> 5 Tips to Save Money Booking Your Next Hotel Room ({params.newsId})
              </h2>
            </div>

            <div className="flex flex-row flex-wrap -mx-3">
              <div className="max-w-full w-full px-4">
                <div className="leading-relaxed pb-4">
                  <p className="mb-5">
                    Aenean sodales lacus est, at ultricies augue ele ifend sit  amet. <ins>Be yourself</ins> everyone else is already taken, sem mi placerat felis, ac suscip ligula ex id metus. Vivamus aliquet sit amet nisi non faucibus. Orci varius natoque penatibus et magnis dis parturient montes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
