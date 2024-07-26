"use client"
import { useState } from 'react';

const SizeDropdown = () => {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleSizeChange = (event) => {
        const options = event.target.options;
        const selected = [];
        for (const option of options) {
            if (option.selected) {
                selected.push(option.value);
            }
        }
        setSelectedSizes(selected);
    };

    return (
        <div>
            <label htmlFor="size-dropdown">Select available sizes:</label>
            <select
                id="size-dropdown"
                multiple
                value={selectedSizes}
                onChange={handleSizeChange}
                style={{ width: '200px', height: '150px' }}
            >
                <option value="S">Small (S)</option>
                <option value="M">Medium (M)</option>
                <option value="L">Large (L)</option>
                <option value="XL">Extra Large (XL)</option>
                <option value="XXL">Double Extra Large (XXL)</option>
            </select>
            {selectedSizes.length > 0 && (
                <div>
                    <h3>Selected Sizes:</h3>
                    <ul>
                        {selectedSizes.map((size) => (
                            <li key={size}>{size}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SizeDropdown;
