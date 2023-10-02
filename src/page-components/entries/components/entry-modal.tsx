import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

interface EntryModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const EntryModal = ({
  isOpen,
  setIsOpen,
}: EntryModalProps) => {
  function saveMessage() {
    if (positiveNote === "") {
      alert("Please enter a positive note")
      return
    } else {
      console.log({
        positiveNote: positiveNote,
        date: todaysDate,
      })

      setIsOpen(false)
    }
    setPositiveNote("")
  }

  function openModal() {
    setIsOpen(true)
  }

  const todaysDate = new Date()

  const [positiveNote, setPositiveNote] = useState("")

  console.log(positiveNote)

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          New Entry
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {`New entry for today`}
                  </Dialog.Title>
                  <div className="mt-2">
                    <label htmlFor="positive-note">
                      Positive
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Record a new experience..."
                      rows={5}
                      name="positive-note"
                      onChange={(e) => {
                        setPositiveNote(e.target.value)
                      }}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={saveMessage}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default EntryModal
