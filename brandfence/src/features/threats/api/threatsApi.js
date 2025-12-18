export async function fetchThreats(mode) {
    await new Promise((r) => setTimeout(r, 500));

    const threats = Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
        name: "Love Romance",
        source: "BRINSmobile",
        platform: "Facebook",
        severity: ["low", "medium", "high", "critical"][i % 4],
        status: ["active", "deleted", "watchlist"][i % 3],
        date: "20 Dec 2023, 12:54 PM",
    }));

    if (mode === "deleted") return threats.filter(t => t.status === "deleted");
    if (mode === "watchlist") return threats.filter(t => t.status === "watchlist");
    return threats;
}
