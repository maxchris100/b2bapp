function formatRupiah(amount: number): string {
    return amount.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
}

export { formatRupiah };