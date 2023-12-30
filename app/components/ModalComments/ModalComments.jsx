import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

function ModalComments() {
  let [isOpen, setIsOpen] = useState(true)

  return (
    // Use the `Transition` component + show prop to add transitions.
    <AnimatePresence>
      {open && (
        <Dialog
          static
          as={motion.div}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black/30" />

          <Dialog.Panel>
            <Dialog.Title>Deactivate account</Dialog.Title>

            {/* ... */}
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  )
}