// ...existing code...
<ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <defs>
            <linearGradient id="colorActiveCases" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ff7300" stopOpacity={0.2} />
            </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
        <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#374151' }} />
        <YAxis tick={{ fontSize: 12, fill: '#374151' }} />
        <Tooltip />
        <Legend />
        <Area
            type="monotone"
            dataKey="activeCases"
            stroke="#ff7300"
            fill="url(#colorActiveCases)"
            strokeWidth={2}
        />
    </AreaChart>
</ResponsiveContainer>
// ...existing code...
