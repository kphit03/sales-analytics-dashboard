
## API Contract

### `GET /api/sales`
Returns a list of all sales records.

**Optional Query Parameters:**
- `start` – Start date (e.g., `2024-01-01`)
- `end` – End date (e.g., `2024-01-31`)

**Example Request:**
```
GET /api/sales?start=2024-01-01&end=2024-01-31
```

**Example Response:**
```json
[
  {
    "id": 1,
    "product": "Wireless Mouse",
    "category": "Electronics",
    "region": "North America",
    "amount": 49.99,
    "date": "2024-01-15"
  }
]
```

---

### `GET /api/summary`
Returns KPI summary metrics.

**Example Response:**
```json
{
  "totalRevenue": 235000.50,
  "topProduct": "Bluetooth Headphones",
  "topRegion": "North America",
  "totalSales": 1048
}
```

---

### `GET /api/products`
Returns a list of products and their categories.

**Example Response:**
```json
[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics"
  }
]
```

---

### `GET /api/sales/export`
Returns a CSV export of filtered sales data.

**Optional Query Parameters:** Same as `/api/sales`  
**Response:** CSV file for download
