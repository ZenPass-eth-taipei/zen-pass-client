import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { useState } from 'react';

export default function NotificationPanel() {
    const [open, setOpen] = useState(false);
    const fetchNotifications = async () => {
        const res = await fetch('https://nodit-server.onrender.com/webhook');

        const data = await res.json();
        return data;
    };
    const { data } = useQuery<any>({
        queryKey: ['notification'],
        queryFn: fetchNotifications,
        enabled: open,
    });
    return (
        <div className="relative z-30">
            <button
                onClick={() => setOpen(!open)}
                className="p-2 ml-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
            >
                <Bell className="w-5 h-5" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-[345px] bg-white shadow-xl rounded-xl overflow-hidden z-50 border border-gray-200"
                    >
                        <div className="p-4 text-sm font-semibold border-b bg-gray-100">
                            🔔 Notifications
                        </div>

                        <div className="divide-y max-h-[400px] overflow-y-auto">
                            {data?.length === 0 ? (
                                <div className="p-4 text-sm text-gray-500">
                                    No notifications yet.
                                </div>
                            ) : (
                                data?.map((notif: any, idx: number) => {
                                    const msg = notif.event?.messages?.[0];
                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3 p-4 hover:bg-gray-50 transition text-sm"
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                                                ⚡
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-gray-800">
                                                    {notif.description ||
                                                        'New Webhook Triggered'}
                                                </div>
                                                <div className="text-xs text-gray-500 mt-1">
                                                    <span className="font-medium">
                                                        Network:
                                                    </span>{' '}
                                                    {notif.network} (
                                                    {notif.protocol})
                                                </div>
                                                {msg?.transaction_hash && (
                                                    <div className="text-xs text-gray-500 mt-1 break-all">
                                                        <span className="font-medium">
                                                            Txn:
                                                        </span>{' '}
                                                        {msg.transaction_hash.slice(
                                                            0,
                                                            10
                                                        )}
                                                        ...
                                                        {msg.transaction_hash.slice(
                                                            -6
                                                        )}
                                                        <a
                                                            href={
                                                                notif.network ===
                                                                'sepolia'
                                                                    ? `https://sepolia.basescan.org/tx/${msg.transaction_hash}`
                                                                    : `https://amoy.polygonscan.com/tx/${msg.transaction_hash}`
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-500 hover:underline ml-1"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                )}
                                                <div className="text-xs text-gray-400 mt-2">
                                                    {new Date(
                                                        notif.createdAt
                                                    ).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
