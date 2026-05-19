# 📋 Feature Documentation - Retail Shop Management System

## Table of Contents
1. [Authentication & User Management](#authentication--user-management)
2. [Point-of-Sale (POS) System](#point-of-sale-pos-system)
3. [Inventory Management](#inventory-management)
4. [Financial Accounting](#financial-accounting)
5. [Customer Debt Management](#customer-debt-management)
6. [Reporting & Analytics](#reporting--analytics)
7. [System Settings](#system-settings)

---

## Authentication & User Management

### Overview
Secure, role-based authentication system with email/password and OAuth2 (Google) support.

### Features

#### User Registration
- **Self-Service Signup**: Customers can create accounts with email and password
- **Email Verification**: Verification emails sent to confirm account ownership
- **Google OAuth**: One-click sign-up with Google accounts
- **Password Requirements**: 
  - Minimum 8 characters
  - Mix of uppercase, lowercase, and numbers
  - Special characters recommended

**User Flow**:
```
1. User clicks "Sign Up"
2. Enters email and password
3. Verification email sent
4. User clicks link in email
5. Account created and verified
6. Redirected to dashboard
```

#### User Login
- **Email/Password Login**: Standard authentication with credentials
- **Google OAuth Login**: 
  - Click "Sign in with Google"
  - Google authentication
  - Automatic profile creation
  - Session established
- **Remember Me**: Optional 30-day session persistence
- **Forgot Password**: Email-based password reset
- **Session Management**: Secure JWT tokens with expiration

**Login States**:
- ✅ Valid credentials → Dashboard access
- ❌ Invalid credentials → Error message
- ⏳ First time with OAuth → Profile setup
- 🔒 Session expired → Re-login required

#### Role-Based Access Control

| Role | Permissions | Dashboard Access |
|------|-----------|------------------|
| **Admin** | Full system access, user management, all reports | All modules |
| **Manager** | Accounting, reports, some user management | Most modules |
| **Staff** | POS operations, basic inventory | POS, limited inventory |
| **Viewer** | Read-only access to reports | Reports only |

**Authorization Model**:
- Server-side validation on every request
- Database Row-Level Security (RLS) policies
- Frontend route guards for UX
- Graceful permission denied messages

#### Password Management
- **Change Password**: Users can update their password anytime
- **Password Reset**: Email-based reset for forgotten passwords
- **Reset Link Expiration**: Links expire after 24 hours
- **Security Questions**: Optional additional verification
- **Password History**: System prevents reuse of recent passwords

**Example User Profile**:
```json
{
  "id": "uuid-123",
  "email": "john.doe@example.com",
  "name": "John Doe",
  "phone": "+254712345678",
  "role": "manager",
  "is_active": true,
  "created_at": "2025-01-10T10:30:00Z",
  "last_login": "2025-01-15T14:22:00Z",
  "avatar_url": "https://..."
}
```

---

## Point-of-Sale (POS) System

### Overview
Fast, intuitive checkout system designed for quick transactions with multiple payment options.

### Features

#### Product Search & Selection
- **Real-time Search**: Type product name/SKU for instant results
- **Category Filtering**: Filter by product category
- **Quick Add**: One-click product addition to cart
- **Barcode Scanning**: Scan product barcodes for quick input
- **Stock Display**: Real-time stock level shown for each product
- **Price Display**: Clear pricing with cost markup visibility

**Search Example**:
```
User types "cooking" → Shows:
1. Cooking Oil - Halisi 3L ($200)
2. Cooking Oil - Nyota 20L ($1,200)
3. Cooking Spice - Mixed ($5.50)
```

#### Shopping Cart Management
- **Add to Cart**: Select quantity when adding
- **Quantity Adjustment**: 
  - Increment/decrement buttons
  - Direct input field
  - Maximum stock validation
- **Remove Items**: Delete items from cart
- **Clear Cart**: Empty entire cart with confirmation
- **Cart Summary**: 
  - Item count
  - Subtotal
  - Running total display

**Cart Display**:
```
┌─────────────────────────────────┐
│ Item          Qty  Price  Subtotal│
├─────────────────────────────────┤
│ Cooking Oil   2    $200   $400    │
│ Sugar         1    $50    $50     │
│ Salt          3    $10    $30     │
├─────────────────────────────────┤
│ Subtotal:           $480         │
│ Tax (16%):          $76.80       │
│ Total:              $556.80      │
└─────────────────────────────────┘
```

#### Payment Processing
- **Multiple Payment Methods**:
  - Cash payment
  - Mobile Money (M-Pesa, Airtel Money)
  - Bank transfer
  - Card payment (via third-party integration)

- **Change Calculation**: Automatic change calculation for cash
  ```
  Amount Tendered: 600
  Total: 556.80
  Change: 43.20
  ```

- **Payment Validation**: Prevents invalid amounts
- **Receipt Generation**: Automatic receipt with items, total, timestamp
- **Payment Confirmation**: Clear confirmation message after payment

**Payment Flow**:
```
1. Customer pays
2. System validates amount
3. Amount ≥ Total → Calculate change
4. Receipt generated and printed
5. Inventory automatically updated
6. Order saved to database
7. Debt recorded if partial payment
```

#### Debt Management (Buy on Credit)
- **Record Debt**: Option to allow customer to buy on credit
- **Partial Payment**: Customer pays partial amount
- **Full Debt Tracking**: System tracks remaining balance
- **Automatic Notifications**: Reminders for unpaid debts
- **Debt Settlement**: Record when customer pays debt

**Example Transaction**:
```
Total: $500
Paid: $200
Debt Created: $300 (Remaining)
Due Date: 2025-02-15
Status: Pending Payment
```

#### Transaction History
- **Receipt Storage**: All receipts stored and retrievable
- **Order History**: View past transactions with details
- **Date Filtering**: Filter orders by date range
- **Search**: Find orders by order number, customer, or item
- **Reprint Receipts**: Reprint any previous receipt

**Example Receipt**:
```
═══════════════════════════════════
    RETAIL SHOP RECEIPT #001234
═══════════════════════════════════
Date: 2025-01-15  Time: 14:22:30
Staff: John Doe
───────────────────────────────────
ITEM              QTY  PRICE  TOTAL
Cooking Oil (3L)   2   $200   $400
Sugar              1   $50    $50
Salt               3   $10    $30
───────────────────────────────────
Subtotal:              $480
Tax (16%):             $76.80
TOTAL:                 $556.80

Payment Method: Cash
Amount Paid: $600
Change: $43.20
───────────────────────────────────
Thank you for your business!
═══════════════════════════════════
```

---

## Inventory Management

### Overview
Comprehensive product catalog management with real-time stock tracking and alerts.

### Features

#### Product Catalog
- **Product Creation**:
  - Product name
  - Description
  - Category assignment
  - Selling price
  - Cost price
  - Images (optional)
  - Low stock threshold

- **Product Update**: Edit product details anytime
- **Product Deactivation**: Disable products without deleting
- **Bulk Import**: Import 100s of products from CSV
- **SKU Management**: Auto-generated or custom
- **Barcode Support**: Generate or import barcodes

**Example Product**:
```
ID: prod-123
Name: Cooking Oil - Halisi 3L
SKU: SKU-1001
Barcode: 5901234567890
Category: Oils & Condiments
Price: $200
Cost Price: $150
Margin: 33.3%
Stock: 45 units
Low Stock Alert: 10 units
Status: Active
```

#### Stock Management
- **Real-time Stock Tracking**: Stock updated immediately on sales
- **Manual Adjustments**: 
  - Add stock (restocking, corrections)
  - Remove stock (damage, shrinkage)
  - Transfer stock between locations
  - Reason tracking for audit trail

- **Stock Levels**:
  - Current quantity display
  - Reserved quantity (pending orders)
  - Available quantity
  - Historical stock levels

**Stock Adjustment Example**:
```
Adjustment Type: Stock Received (Restocking)
Product: Cooking Oil - Halisi 3L
Previous: 45 units
Added: 50 units
New Total: 95 units
Reason: New shipment from supplier
Date: 2025-01-15
Adjusted By: Manager John Doe
```

#### Low Stock Alerts
- **Threshold Configuration**: Set minimum stock level per product
- **Automatic Alerts**: Notifications when stock falls below threshold
- **Alert Dashboard**: Central view of all low-stock items
- **Reorder Suggestions**: Recommended quantity to order
- **Supplier Management**: Link to preferred suppliers

**Example Low Stock Alert**:
```
⚠️ LOW STOCK ALERT
Product: Sugar (1kg bags)
Current Stock: 8 units
Threshold: 10 units
Status: ALERT - Below Threshold
Suggested Order: 50 units
Supplier: Commodity Supplies Ltd
```

#### Product Categories
- **Category Management**: Create, edit, delete categories
- **Subcategories**: Nested category structure
- **Category Filtering**: Filter products by category in POS
- **Reporting by Category**: Sales/profit by category

**Example Categories**:
```
Oils & Condiments
├── Cooking Oils
├── Spices & Seasoning
└── Sauces & Condiments

Beverages
├── Soft Drinks
├── Alcoholic Beverages
└── Water & Juices

Dry Goods
├── Grains & Cereals
├── Flour & Baking
└── Pasta & Rice
```

#### Bulk Product Import
- **CSV Upload**: Import multiple products at once
- **Format Validation**: Automatic format checking
- **Duplicate Detection**: Prevent duplicate SKUs
- **Error Reporting**: Detailed error messages for failed imports
- **Partial Success**: Import successful rows, report failures

**CSV Format**:
```csv
name,description,price,cost_price,category_id,low_stock_threshold,quantity
Cooking Oil,Halisi 3L,200,150,cat-1,10,0
Cooking Oil,Nyota 20L,1200,900,cat-1,10,1
Sugar,1kg Bags,50,40,cat-2,5,20
```

---

## Financial Accounting

### Overview
Complete financial tracking with revenue, expenses, and profit analysis.

### Features

#### Income Tracking
- **Sales Recording**: Automatic from POS transactions
- **Sales by Category**: Breakdown by product category
- **Sales by Period**: Daily, weekly, monthly summaries
- **Average Transaction Value**: Calculate avg order size
- **Revenue Trends**: Track growth over time

**Daily Revenue Example**:
```
Date: 2025-01-15
Total Sales: 12,450 KES
Transactions: 34
Average Per Transaction: 366 KES
Top Category: Oils & Condiments (3,200 KES)
```

#### Expense Tracking
- **Expense Categories**:
  - Supplier purchases
  - Salary & wages
  - Rent & utilities
  - Marketing
  - Transportation
  - Maintenance & repairs
  - Other operating expenses

- **Manual Entry**: Add expenses that aren't from POS
- **Receipt Upload**: Attach receipts for verification
- **Approval Workflow**: Manager approval for large expenses
- **Budget vs Actual**: Compare to budget allocations

**Expense Entry Example**:
```
Date: 2025-01-15
Category: Supplier Purchase
Amount: 5,000 KES
Supplier: Commodity Supplies Ltd
Description: Monthly oil supplies
Receipt: Uploaded (PDF)
Status: Pending Manager Approval
```

#### Profit & Loss Calculations
- **Gross Profit**: Revenue - Cost of Goods Sold
  ```
  Revenue:           15,000 KES
  COGS:              7,500 KES
  Gross Profit:      7,500 KES (50% margin)
  ```

- **Operating Expenses**: Rent, salaries, utilities
- **Net Profit**: Gross Profit - Operating Expenses
  ```
  Gross Profit:      7,500 KES
  Operating Exp:     3,000 KES
  Net Profit:        4,500 KES (30% margin)
  ```

- **Financial Ratios**:
  - Gross Margin %
  - Net Margin %
  - ROI (Return on Investment)
  - Expense Ratio

#### Financial Reports
- **Monthly Profit & Loss**: Complete P&L statement
- **Daily Revenue Report**: Daily sales summary
- **Expense Breakdown**: Pie chart of expense categories
- **Cash Flow Report**: Money in vs money out
- **Period Comparison**: Compare this month to last month

**Example P&L Report**:
```
═══════════════════════════════════════
    PROFIT & LOSS REPORT
    January 1-15, 2025
═══════════════════════════════════════
REVENUE:
  Sales                    185,500 KES
  Other Income               2,000 KES
Total Revenue:             187,500 KES

COST OF GOODS SOLD:
  Opening Stock             45,000 KES
  Purchases                 85,000 KES
  Closing Stock            (40,000 KES)
Total COGS:                 90,000 KES

GROSS PROFIT:               97,500 KES (52%)

OPERATING EXPENSES:
  Salary & Wages           15,000 KES
  Rent                      5,000 KES
  Utilities                 2,000 KES
  Transport                 1,500 KES
  Other                     2,000 KES
Total Operating Exp:       25,500 KES

NET PROFIT:                 72,000 KES (38%)
═══════════════════════════════════════
```

---

## Customer Debt Management

### Overview
Track customer credit, loans, and payment history with automated reminders.

### Features

#### Debt Recording
- **Automatic Creation**: Debt automatically created when customer pays partial amount
- **Manual Entry**: Add existing debt for cash sales not yet recorded
- **Debt Details**:
  - Customer name and contact
  - Amount owed
  - Original transaction date
  - Due date
  - Interest rate (if applicable)

**Debt Record Example**:
```
Customer: Mary Johnson
Phone: +254712345678
Original Amount: 5,000 KES
Paid: 2,000 KES
Outstanding Balance: 3,000 KES
Original Date: 2025-01-10
Due Date: 2025-02-10
Days Overdue: 5 days
Status: OVERDUE
```

#### Debt Settlement
- **Payment Recording**: Record customer payments against debt
- **Partial Payments**: Accept partial payment towards debt
- **Full Settlement**: Mark debt as settled
- **Payment Methods**: Track payment method used
- **Payment Receipts**: Generate receipts for debt payments

**Settlement Flow**:
```
Customer pays 1,500 KES against 3,000 KES debt
→ New Balance: 1,500 KES
→ Payment recorded with date and method
→ Payment receipt generated
→ Remaining balance shown for next payment
```

#### Payment History
- **Per Customer**: View all payments by customer
- **Timeline View**: Chronological payment history
- **Amount & Date**: When and how much paid
- **Running Balance**: Balance after each payment
- **Export**: Export payment history to PDF/Excel

**Example Payment Timeline**:
```
Customer: Mary Johnson

Payment #1: 2025-01-15  -1,000 KES  Balance: 4,000 KES
Payment #2: 2025-01-20  -500 KES   Balance: 3,500 KES
Payment #3: 2025-01-25  -2,000 KES Balance: 1,500 KES
Pending:    2025-02-10              Balance: 1,500 KES (Overdue)
```

#### Debt Notifications
- **Email Reminders**: Automatic emails for upcoming due dates
- **SMS Reminders**: Text message reminders (if enabled)
- **Overdue Alerts**: Highlighted overdue debts in dashboard
- **Custom Messages**: Personalized reminder messages
- **Batch Notifications**: Send reminders to multiple customers

**Example Notification**:
```
Subject: Payment Reminder - Outstanding Balance

Dear Mary,

This is a friendly reminder that you have an outstanding 
balance of 3,000 KES that was due on 2025-02-10.

Please arrange payment at your earliest convenience.

Contact us if you have any questions.

Thank you,
Retail Shop Team
```

#### Debt Dashboard
- **Total Outstanding Debt**: Sum of all unpaid balances
- **Overdue Debt**: Amount overdue (past due date)
- **Top Debtors**: Customers with largest balances
- **Aging Report**: Group debts by days overdue
- **Collection Rate**: Percentage of debts collected

**Example Dashboard Summary**:
```
═══════════════════════════════════════
         DEBT DASHBOARD
═══════════════════════════════════════
Total Outstanding Debt: 185,500 KES

Breakdown by Status:
├── Current (Not Yet Due)    45,000 KES
├── 1-30 Days Overdue        65,000 KES
├── 31-60 Days Overdue       55,000 KES
└── 60+ Days Overdue         20,500 KES

Top 5 Debtors:
1. Mary Johnson       - 3,000 KES (5 days overdue)
2. John Smith        - 8,500 KES (12 days overdue)
3. Alice Brown       - 5,200 KES (Current)
4. Bob Wilson        - 7,800 KES (25 days overdue)
5. Susan Davis       - 6,000 KES (Current)

Collection Rate: 78% (collected/total extended credit)
═══════════════════════════════════════
```

---

## Reporting & Analytics

### Overview
Comprehensive dashboards and reports for data-driven decision making.

### Features

#### Sales Dashboard
- **Today's Sales**: Real-time sales for current day
- **Sales Trend**: Chart showing sales over last 30 days
- **Top Products**: Best-selling items
- **Top Customers**: Customers with most purchases
- **Payment Methods**: Sales by payment type
- **Hourly Breakdown**: When most sales occur

**Example Dashboard**:
```
TODAY'S SALES
┌─────────────────────────────────┐
│ Total Sales: 12,450 KES         │
│ Transactions: 34                │
│ Avg. Per Transaction: 366 KES   │
│ Tax Collected: 1,992 KES        │
└─────────────────────────────────┘

TOP 5 PRODUCTS
1. Cooking Oil (3L) - 245 units
2. Sugar (1kg) - 189 units
3. Salt (1kg) - 156 units
4. Flour (2kg) - 134 units
5. Spices Mix - 98 units

SALES BY PAYMENT METHOD
├── Cash        8,500 KES (68%)
├── Mobile      3,500 KES (28%)
└── Credit      450 KES (4%)
```

#### Inventory Report
- **Stock Levels**: Current quantity of all products
- **Stock Value**: Total inventory value at cost
- **Low Stock Items**: Products below threshold
- **Overstocked Items**: Products exceeding normal levels
- **Stock Movement**: Fast vs slow moving items
- **Upcoming Expiry**: Items approaching expiration

**Inventory Report Example**:
```
═══════════════════════════════════════
      INVENTORY REPORT
      January 15, 2025
═══════════════════════════════════════

Total Products: 286
├── Active: 280
├── Inactive: 6

Stock Status:
├── Low Stock Items: 12
├── Out of Stock: 2
└── Overstocked: 5

Total Inventory Value (at cost): 
  1,245,000 KES

Low Stock Alert Items:
1. Sugar (1kg bags)    - 8 units (threshold: 10)
2. Flour (2kg bags)    - 9 units (threshold: 10)
3. Salt (1kg bags)     - 7 units (threshold: 15)

Fast-Moving Items (>50/week):
1. Cooking Oil (3L)    - 245 units/week
2. Sugar (1kg)         - 189 units/week
3. Flour (2kg)         - 156 units/week
═══════════════════════════════════════
```

#### Financial Reports
- **Monthly P&L**: Profit and loss statement
- **Cash Flow**: Cash in vs cash out
- **Revenue by Category**: Which categories are profitable
- **Expense Analysis**: Where money is being spent
- **Budget vs Actual**: Performance against budget

#### Customer Reports
- **Total Customers**: Number of unique customers
- **Customer Spending**: Average spend per customer
- **Customer Frequency**: How often customers visit
- **Loyal Customers**: Repeat customers
- **Debt Report**: Customer debt summary
- **Customer Segments**: Group by spending level

#### Staff Performance
- **Sales per Staff**: Revenue by staff member
- **Transaction Count**: Number of transactions
- **Average Transaction**: Average value per transaction
- **Peak Hours**: When staff works best
- **Customer Satisfaction**: Ratings if available

**Example Staff Report**:
```
═══════════════════════════════════════
    STAFF PERFORMANCE REPORT
    January 1-15, 2025
═══════════════════════════════════════

Staff: John Doe
├── Total Sales: 85,500 KES
├── Transactions: 245
├── Avg. Per Transaction: 349 KES
└── On Duty: 120 hours

Staff: Jane Smith
├── Total Sales: 92,000 KES
├── Transactions: 260
├── Avg. Per Transaction: 354 KES
└── On Duty: 120 hours

Staff: Bob Wilson
├── Total Sales: 78,200 KES
├── Transactions: 220
├── Avg. Per Transaction: 355 KES
└── On Duty: 110 hours

TOP PERFORMER: Jane Smith (92,000 KES)
═══════════════════════════════════════
```

#### Report Export
- **PDF Export**: Professional PDF format
- **Excel Export**: Spreadsheet for further analysis
- **CSV Export**: For data import to other systems
- **Scheduled Reports**: Auto-generate and email reports
- **Custom Reports**: Create custom report definitions

---

## System Settings

### Overview
Configure system preferences and manage administrative settings.

### Features

#### User Profile Settings
- **Profile Information**:
  - Name
  - Email
  - Phone number
  - Avatar/profile picture
  - Department/role
  - Preferred language

- **Privacy Settings**:
  - Visibility of profile
  - Data collection preferences
  - Newsletter opt-in/out
  - Marketing communications

#### Password & Security
- **Change Password**: Update current password
- **Two-Factor Authentication**: Enable for extra security
- **Security Questions**: Set for password recovery
- **Login History**: View recent login attempts
- **Active Sessions**: View and revoke active sessions
- **Device Management**: Manage trusted devices

#### System Configuration (Admin Only)
- **Store Information**:
  - Store name
  - Store address
  - Phone number
  - Email address
  - Tax ID
  - Currency
  - Time zone

- **Business Settings**:
  - Tax rate (VAT/GST)
  - Default discount rate
  - Stock warning threshold
  - Receipt settings
  - Numbering sequence for orders

**Example System Settings**:
```
STORE INFORMATION
├── Store Name: Retail Shop Ltd
├── Address: 123 Main Street, City
├── Phone: +254712345678
├── Email: info@retailshop.com
└── Tax ID: PIN/KRA-12345678

BUSINESS SETTINGS
├── Tax Rate: 16% (VAT)
├── Default Currency: KES
├── Stock Alert Level: 10 units
├── Receipt Printer: Thermal 80mm
└── Number Sequence: ORD-[YYYY][MMDD]

SYSTEM SECURITY
├── Session Timeout: 30 minutes
├── Password Expiry: 90 days
├── Failed Login Attempts: 5 max
└── 2FA Required: Yes
```

#### Backup & Recovery
- **Automated Backups**: Daily backup to cloud
- **Manual Backup**: Create backup on-demand
- **Backup History**: View all previous backups
- **Restore Option**: Restore from previous backup
- **Backup Verification**: Ensure backups are valid

#### Audit Trail
- **User Activity Logging**: All actions logged
- **Data Changes**: Track who changed what and when
- **Access Logs**: Who accessed what data
- **Report Export**: Export audit logs for compliance
- **Retention Policy**: Automatic cleanup of old logs

---

## Integration Features (Extended)

### Google Sheets Integration (v2.0)
- **Auto-Sync Inventory**: Sync product data to Google Sheets
- **Import from Sheets**: Add products from a spreadsheet
- **Real-time Updates**: Changes reflect in both systems
- **Scheduled Sync**: Automated daily/hourly sync
- **Conflict Resolution**: Handle conflicting changes

### Mobile Responsiveness
- **Mobile POS**: Use tablet/phone for checkout
- **Mobile Dashboard**: View reports on mobile
- **Offline Mode**: Work offline, sync when online
- **Touch Optimized**: Large buttons for touch interface
- **Portrait & Landscape**: Works in both orientations

---

## Key Metrics & KPIs

The system tracks and displays:
- **Revenue per Day/Week/Month**
- **Average Transaction Value**
- **Profit Margin %**
- **Stock Turnover Ratio**
- **Customer Acquisition Rate**
- **Debt Collection Rate**
- **Staff Productivity**
- **Inventory Accuracy**

---

**Last Updated**: January 2025
**Feature Status**: All Core Features Complete ✅
