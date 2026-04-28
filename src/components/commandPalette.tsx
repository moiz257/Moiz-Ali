"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search, User, Briefcase, Mail, Phone, Layout, Code2 } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center px-4 pt-[20vh]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            {/* CMD Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-3xl"
            >
              <Command
                className="w-full"
                loop
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpen(false);
                }}
              >
                <div className="flex items-center border-b border-white/10 px-4">
                  <Search className="mr-2 h-5 w-5 text-white/40 shrink-0" />
                  <Command.Input
                    placeholder="Type a command or search..."
                    className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                    autoFocus
                  />
                  <div className="ml-2 flex items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-white/40">
                    ESC
                  </div>
                </div>

                <Command.List className="max-h-[300px] overflow-y-auto p-2 hide-scrollbar">
                  <Command.Empty className="py-6 text-center text-sm text-white/40">
                    No results found.
                  </Command.Empty>

                  <Command.Group heading="Go To" className="px-2 py-1.5 text-xs font-medium text-white/40 uppercase tracking-widest">
                    <Command.Item
                      onSelect={() => runCommand(() => router.push("/"))}
                      className="flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white mt-1"
                    >
                      <Layout className="h-4 w-4" /> Home
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push("/about"))}
                      className="flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white mt-1"
                    >
                      <User className="h-4 w-4" /> About Me
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push("/work"))}
                      className="flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white mt-1"
                    >
                      <Briefcase className="h-4 w-4" /> My Work
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push("/contact"))}
                      className="flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white mt-1"
                    >
                      <Phone className="h-4 w-4" /> Contact
                    </Command.Item>
                  </Command.Group>

                  <Command.Group heading="Socials" className="px-2 py-1.5 text-xs font-medium text-white/40 uppercase tracking-widest mt-2">
                    <Command.Item
                      onSelect={() => runCommand(() => window.open("https://github.com/moiz257", "_blank"))}
                      className="flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white mt-1"
                    >
                      <FaGithub className="h-4 w-4" /> GitHub
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/moiz-ali-20b280274/", "_blank"))}
                      className="flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white mt-1"
                    >
                      <FaLinkedinIn className="h-4 w-4" /> LinkedIn
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => window.open("mailto:moizali2577@gmail.com", "_blank"))}
                      className="flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm text-emerald-400 transition-colors hover:bg-white/10 hover:text-emerald-300 aria-selected:bg-white/10 mt-1"
                    >
                      <Mail className="h-4 w-4" /> Send Email
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
