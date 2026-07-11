import { motion } from "framer-motion";

export function LaptopMockup() {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-10">
      {/* Ambient glow behind the laptop */}
      <div className="absolute inset-x-10 top-1/2 -z-10 h-64 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative"
      >
        {/* Gentle continuous float */}
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          {/* Screen bezel */}
          <div className="rounded-t-2xl border-[6px] border-b-0 border-neutral-800 bg-neutral-900 p-3 shadow-2xl">
            <div className="mb-2 flex gap-1.5 px-1">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-yellow-400" />
              <span className="size-2.5 rounded-full bg-green-400" />
            </div>

            {/* Screen content — abstract "futuristic" dashboard UI */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary via-emerald-500 to-teal-700">
              {/* subtle grid texture */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative flex h-full flex-col gap-3 p-5 sm:gap-4 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="h-2.5 w-16 rounded-full bg-white/50 sm:w-20" />
                  <div className="flex gap-1.5">
                    <div className="size-2 rounded-full bg-white/40" />
                    <div className="size-2 rounded-full bg-white/40" />
                    <div className="size-2 rounded-full bg-white/40" />
                  </div>
                </div>

                <div className="h-4 w-2/3 rounded-md bg-white/80 sm:h-6" />
                <div className="h-2 w-1/2 rounded-full bg-white/40 sm:h-3" />

                <div className="mt-1 grid flex-1 grid-cols-3 gap-2 sm:gap-3">
                  <motion.div
                    animate={{ opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-lg bg-white/15 backdrop-blur-sm"
                  />
                  <motion.div
                    animate={{ opacity: [0.9, 0.5, 0.9] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="rounded-lg bg-white/25 backdrop-blur-sm"
                  />
                  <motion.div
                    animate={{ opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="rounded-lg bg-white/15 backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Floating status badge, overlapping the screen edge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-2 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-neutral-900 shadow-xl sm:px-4 sm:text-sm"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
                Live in 7 days
              </motion.div>
            </div>
          </div>

          {/* Laptop base / keyboard */}
          <div className="relative left-1/2 h-3 w-[104%] -translate-x-1/2 rounded-b-xl bg-gradient-to-b from-neutral-300 to-neutral-400 sm:h-4" />
          <div className="mx-auto h-1.5 w-1/5 rounded-b-md bg-neutral-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
