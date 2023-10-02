import { MDXRemote } from "next-mdx-remote/rsc";
import Note from "@/app/components/Note";
import MarkdownImage from "@/app/components/MarkdownImage";

// Can use service since it's a server component
import { readNoteData, readNotesIds } from "@/utils/service";

const components = { MarkdownImage };

export const dynamicParams = false;

export async function generateStaticParams() {
  // const noteIDs = readNotesIds();
  const noteIDs = ["embracing-change", "test"];
  const temp = noteIDs.map((id) => ({
    id,
  }));
  return temp;
}

// Ignore Invalid prop `children` supplied to `ForwardRef(Box)` error in dev it's built using SSG
const Page = async ({ params }: { params: { id: string } }) => {
  // const { data, content } = readNoteData(params.id);
  const data = {
    id: "d36c3620-daee-40aa-9782-fa4971aac1c6",
    date: "2023-10-02T14:32:45.994Z",
    name: "embracing-change",
    title: "Embracing Change: Navigating Life's Unpredictable Journey",
    length: "1 min",
    imagePath: "a-man-is-walking-up-a-set-of-stairs-so6KznQxIAk",
    chips: "Tech, Business, Self-help",
    content:
      "In a **world** that's constantly evolving, embracing change has become more than just a catchphrase - it's a necessary mindset for navigating life's unpredictable journey. Just like the seasons shift and transform, our lives too undergo various phases of growth, challenges, and triumphs.  \\ Picture this: you wake up one morning to find yourself surrounded by unfamiliar landscapes. At first, discomfort and uncertainty may wash over you, but here's the catch - these moments of change are where we truly discover our resilience and adaptability.  \\ Change isn't always about grand gestures and sweeping transformations. It can be as simple as altering your daily routine, trying a new hobby, or shifting your perspective on a long-standing issue. These micro-changes, seemingly insignificant at first, can accumulate and lead to profound personal growth.  \\ Remember the time when you hesitantly started that new job or moved to a new city? The initial unease gradually gave way to a sense of accomplishment and a broader outlook on life. Similarly, embracing change opens doors to new experiences and opportunities that might have remained hidden otherwise.  \\ But let's not overlook the discomfort that often accompanies change. It's perfectly natural to feel apprehensive when faced with uncertainty. However, it's in these moments of discomfort that we truly learn about ourselves. We discover untapped strengths, forge new connections, and develop coping mechanisms we never knew we had.  \\ So, how can we gracefully navigate these ever-changing waters? Here are a few tips to keep in mind:  1.  Cultivate Curiosity: Approach change with a curious mind.     Instead of fearing the unknown, treat it as an adventure. Ask     questions, explore possibilities, and maintain an open heart.  2.  Stay Flexible: Rigidity can hinder growth. Be willing to adapt     and adjust your course when unexpected turns arise. Flexibility is     the key to riding the waves of change.  3.  Mindfulness Matters: Ground yourself in the present moment.     Mindfulness can alleviate the anxiety that often accompanies     change by helping you focus on what's happening right now, rather     than worrying about an uncertain future.  4.  Seek Support: You're not alone on this journey. Lean on     friends, family, or even professionals for guidance and support.     Sharing your experiences can often lighten the emotional load.  5.  Celebrate Small Wins: Acknowledge your progress, no matter how     minor. Every step you take toward embracing change is a victory     worth celebrating.  \\ Remember, change is a constant in life - an ever-present force that shapes us, challenges us, and ultimately propels us forward. By embracing change with an open heart and a curious mind, you can turn life's uncertainties into opportunities for growth and transformation. So, step into the unknown with confidence, and let the journey unfold.",
  };
  const content = data.content;
  return (
    <Note data={data} content={content}>
      <MDXRemote source={content} components={components} />
    </Note>
  );
};

export default Page;
