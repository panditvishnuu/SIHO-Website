import { MagicCard } from "@/components/ui/magic-card";
import NumberTicker from "@/components/ui/number-ticker";
import WordFadeIn from "./ui/word-fade-in";


export function MagicCardDemo() {
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[500px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-xl whitespace-nowrap text-4xl"
        
      >
        <div className="text-4xl">
          <span className="text-blue-500 font-bold">
            11 years of experience
          </span>{" "}
          with compound annual growth rate (CAGR) of more than <br />
          <NumberTicker
            value={29.8}
            decimalPlaces={1}
            className="text-4xl font-bold"
          /> <span>{"%"}</span>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        
      >
        <div>
          <WordFadeIn words="We are a team of" />
        </div>
      </MagicCard>
    </div>
  );
}
