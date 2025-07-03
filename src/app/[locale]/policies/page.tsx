import { PolicyContents } from "@/components/policies/policies";

const policies = [
  {
    name: 'privacy',
    title: 'title: privacy',
    description: 'description: privacy',
    content: 'content: privacy',
    footer: 'footer: privacy',
  },
    {
    name: 'terms',
    title: 'title: terms',
    description: 'description: terms',
    content: 'content: terms',
    footer: 'footer: terms',
  },
  {
    name: 'tech',
    title: 'title: tech',
    description: 'description: tech',
    content: 'At Google, we pursue ideas and products that often push the limits of existing technology. As a company that acts responsibly, we work hard to make sure any innovation is balanced with the appropriate level of privacy and security for our users. Our Privacy Principles help guide decisions we make at every level of our company, so we can help protect and empower our users while we fulfill our ongoing mission to organize the world’s information.',
    footer: 'footer: tech',
  },
  {
    name: 'faq',
    title: 'title: faq',
    description: 'description: faq',
    content: 'content: faq',
    footer: 'footer: faq',
  },
];

export default async function PoliciesPage() {
  return (
    <div className='row-start-2 flex flex-col items-center justify-center gap-8 '>
      <div className="flex flex-col sm:w-[600px] gap-2">
        <PolicyContents params={policies} />
      </div>
    </div>
  )
}
