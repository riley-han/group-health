import React from "react"
import EntryModal from "@/page-components/entries/components/entry-modal"
import EntryCard from "@/page-components/entries/components/entry-card"

const Entries = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
      <EntryModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <EntryCard />
    </div>
  )
}

export default Entries
