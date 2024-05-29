import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Information from "./Information";

export default function IdCard() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-1 place-items-center lg:place-items-start gap-2">
      <Card className="lg:w-4/5 h-full border-neutral-600">
        <CardHeader className="gap-0 p-4">
          <CardTitle className="font-thin text-sm md:text-xl">
            Software Engineer
          </CardTitle>
          <CardTitle className="text-md md:text-2xl lg:text-2xl">
            Sertan Soydabaş
          </CardTitle>
        </CardHeader>

        <CardContent className="w-full md:w-3/5 m-auto pb-2">
          <img
            src="http://cdn.mcauto-images-production.sendgrid.net/15708a52014a0240/843f0054-45ea-4fc8-ab11-f3c174f111a3/591x709.jpg"
            className="object-contain"
          />
        </CardContent>
      </Card>

      <Information />
    </div>
  );
}
