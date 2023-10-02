import React from "react"
import EntryModal from "@/page-components/entries/components/entry-modal"

const Entries = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
      <EntryModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Entries
