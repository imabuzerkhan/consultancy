import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Accordions() {
  return (
    <>
    <h2 className="font-bold text-3xl mt-10 " >Faq</h2>
   
    <Accordion type="single" collapsible className="w-full my-8 ">
      <AccordionItem value="item-1">
        <AccordionTrigger>What topics are covered in the Full Stack Web Development Bootcamp?</AccordionTrigger>
        <AccordionContent>
          The bootcamp covers HTML, CSS, JavaScript, Node.js, Express, and MongoDB. It provides a comprehensive understanding of both front-end and back-end technologies.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How can I access the Advanced JavaScript Mastery course materials?</AccordionTrigger>
        <AccordionContent>
          You will have lifetime access to the course materials. This includes video lectures, coding exercises, and supplementary resources.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Are there any prerequisites for the Data Science with Python course?</AccordionTrigger>
        <AccordionContent>
          Basic programming knowledge in Python is recommended. Familiarity with data analysis concepts will be helpful but is not required.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What is included in the Complete UI/UX Design Course?</AccordionTrigger>
        <AccordionContent>
          The course includes modules on UI/UX design fundamentals, wireframing, prototyping, user testing, and real-world case studies. You will also receive hands-on assignments.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I get a certificate for completing the Deep Learning Specialization?</AccordionTrigger>
        <AccordionContent>
          Yes, a certificate of completion is provided upon finishing the course. It can be added to your resume or LinkedIn profile.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>What support is available during the Graphic Design Fundamentals course?</AccordionTrigger>
        <AccordionContent>
          The course offers 24/7 support through online forums and email. You can also access feedback from instructors and peers on your design projects.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </>
  );
}
