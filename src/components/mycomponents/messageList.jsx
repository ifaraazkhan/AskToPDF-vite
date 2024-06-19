import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";


const MessageList = ({ messages, isLoading }) => {
  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }
  if (!messages) return <></>;
  return (
    <div className="flex flex-col gap-2 px-4">
      {messages.map((message) => {
        console.log("message-->",message);
        const containsPages = message.content.includes('PAGES');
        const contentWithLineBreak = containsPages
        ? message.content.replace('PAGES', '<br/>PAGES')
        : message.content;

       // Check if "PAGES: [numbers]" format is detected
       const match = message.content.match(/PAGES: (\d+(?:, \d+)*)/);
       // If "PAGES: [numbers]" format is detected, extract the numbers
       const pageNumbers = match ? match[1].split(', ').map(Number) : null;

      //  const contentWithFormattedPages = match
      //  ? message.content.replace(
      //      match[0],
      //      `<br/>PAGES: ${pageNumbers
      //        .map((num) => `<a href="#" class="items-center rounded-sm bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">${num}</a>`)
      //        .join(', ')}`
      //    )
      //  : message.content;

      const contentWithFormattedPages = match
          ? message.content.replace(
              match[0],
              `<br/>PAGES: ${pageNumbers
                .map((num) => `<button onclick="handleScrollToPage(${num})" class="items-center rounded-sm bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">${num}</button>`)
                .join(', ')}`
            )
          : message.content;

        return (
          <div
            key={message.id}
            className={cn("flex", {
              "justify-end pl-10": message.role === "user",
              "justify-start pr-10": message.role === "assistant",
            })}
          >
            <div
              className={cn(
                "rounded-lg px-3 text-sm py-1 shadow-md ring-1 ring-gray-900/10",
                {
                  "bg-blue-600 text-white": message.role === "user",
                }
              )}
            >
              {/* <p>{message.content}</p> */}
              {/* <p dangerouslySetInnerHTML={{ __html: contentWithLineBreak }} /> */}
              <p dangerouslySetInnerHTML={{ __html: contentWithFormattedPages }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;