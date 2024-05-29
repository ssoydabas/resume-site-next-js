import { Card, CardContent } from "@/components/ui/card";
import Information from "./Information";

export default function MobileIdCard({ width }: { width: number }) {
  const isMobile = width < 768;

  return (
    <Card className="border-neutral-600">
      <CardContent>
        <div className="flex flex-col md:flex-row md:justify-between sm:p-2">
          <div className="flex flex-col gap-8 sm:gap-4">
            <div className="flex flex-col gap-2 pt-4">
              <div className="text-thin text-lg sm:text-xl">
                Software Engineer
              </div>
              <div className="text-2xl sm:text-4xl">Sertan Soydabaş</div>
            </div>

            {isMobile && (
              <img
                src="http://cdn.mcauto-images-production.sendgrid.net/15708a52014a0240/843f0054-45ea-4fc8-ab11-f3c174f111a3/591x709.jpg"
                className="mx-auto w-52 md:w-64 object-contain rounded-full"
              />
            )}

            <Information />
          </div>

          <div className="h-full p-2">
            {!isMobile && (
              <img
                src="http://cdn.mcauto-images-production.sendgrid.net/15708a52014a0240/843f0054-45ea-4fc8-ab11-f3c174f111a3/591x709.jpg"
                className="w-32 sm:w-52 md:w-64 object-contain rounded-full"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
