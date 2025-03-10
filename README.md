# **Regex Problems: PIN Code & Email Validation**

---

## **1. PIN Code Validation**

### **Description**

The PIN code follows the Indian Postal Index Number (PIN) system, which consists of **six digits**.

### **Validation Rules:**

- The PIN **must start with a non-zero digit**.
- It can contain an **optional space** between the third and fourth digit.
- **Alphabets and special characters are not allowed at the beginning or end**.

### **Regex Used**

```regex
^[1-9][0-9]{2}\s?[0-9]{3}$
```

---

## **2. Email Validation**

### **Description**

The email follows a structured format with mandatory and optional parts.

### **Validation Rules:**

✅ The email must start with abc.
✅ It must contain @bridgelabz.co as the mandatory part.
✅ An optional username (xyz) can appear after "abc", but only if it starts with _, +, -, or ..
✅ A Top-Level Domain (TLD) like .in, .us, .uk is optional but allowed.

### **Regex Used**

```regex
^abc([._+\-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$ 
```

