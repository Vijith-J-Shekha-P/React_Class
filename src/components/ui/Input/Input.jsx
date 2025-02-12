const Input = () => {
  // Styles object
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "20px auto",
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      backgroundColor: "white",
    },
    header: {
      marginBottom: "20px",
      borderBottom: "1px solid #eee",
      paddingBottom: "10px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
      margin: "0 0 10px 0",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    label: {
      fontWeight: "500",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
      boxSizing: "border-box",
    },
    checkboxGroup: {
      display: "flex",
      gap: "20px",
    },
    checkboxLabel: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#333",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    },
    submitButton: {
      padding: "10px 20px",
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    resetButton: {
      padding: "10px 20px",
      backgroundColor: "#6b7280",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("event:", event);
    // console.log(
    //   "Form submitted:",
    //   Object.fromEntries(new FormData(event.target))
    // );
  };

  // Generic change handler for logging
  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    // console.log("Event target:", e.target.value);

    if (type === "checkbox" || type === "radio") {
      console.log(`${name} changed:`, checked);
    } else if (type === "file") {
      console.log(`${name} files selected:`, files);
    } else {
      console.log(`${name} changed:`, value);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>HTML Input Types Demo</h1>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Text input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Text Input:
            <input
              type="text"
              name="textInput"
              style={styles.input}
              placeholder="Enter text"
              maxLength={50}
              // required
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Password input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              style={styles.input}
              minLength={8}
              autoComplete="new-password"
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Email input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              style={styles.input}
              placeholder="example@email.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Number input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Number:
            <input
              type="number"
              name="number"
              style={styles.input}
              min={0}
              max={4}
              step={2}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Range input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Range:
            <input
              type="range"
              name="range"
              style={{ width: "100%" }}
              min={0}
              max={100}
              step={10}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Checkbox group */}
        <div style={styles.formGroup}>
          <p style={styles.label}>Interests:</p>
          <div style={styles.checkboxGroup}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="interests"
                value="coding"
                onChange={handleChange}
              />
              Coding
            </label>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="interests"
                value="design"
                onChange={handleChange}
              />
              Design
            </label>
          </div>
        </div>

        {/* Radio group */}
        <div style={styles.formGroup}>
          <p style={styles.label}>Gender:</p>
          <div style={styles.checkboxGroup}>
            <label style={styles.checkboxLabel}>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              Male
            </label>
            <label style={styles.checkboxLabel}>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        {/* Date input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Date:
            <input
              type="date"
              name="date"
              style={styles.input}
              min="2024-01-01"
              max="2025-12-31"
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Time input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Time:
            <input
              type="time"
              name="time"
              style={styles.input}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Color input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Color:
            <input type="color" name="color" onChange={handleChange} />
          </label>
        </div>

        {/* File input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            File:
            <input
              type="file"
              name="file"
              style={styles.input}
              accept=".pdf,.doc,.docx"
              multiple
              onChange={handleChange}
            />
          </label>
        </div>

        {/* URL input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Website:
            <input
              type="url"
              name="website"
              style={styles.input}
              placeholder="https://example.com"
              pattern="https://.*"
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Search input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Search:
            <input
              type="search"
              name="search"
              style={styles.input}
              placeholder="Search..."
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Tel input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Phone:
            <input
              type="tel"
              name="phone"
              style={styles.input}
              placeholder="123-456-7890"
              // pattern="[6-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Hidden input */}
        <input type="hidden" name="hiddenField" value="secretValue" />

        {/* Submit and Reset buttons */}
        <div style={styles.buttonGroup}>
          <input type="submit" value="save" style={styles.submitButton} />
          <input
            type="reset"
            value="Reset"
            style={styles.resetButton}
            onClick={() => console.log("Form reset")}
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
