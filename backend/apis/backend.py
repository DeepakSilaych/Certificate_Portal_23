import pandas as pd
from PIL import Image, ImageDraw, ImageFont

def generate_certificate(roll_number, data_file, template_image, output_file):
    # Read data from Excel or CSV file
    if data_file.endswith('.xlsx'):
        df = pd.read_excel(data_file)
    elif data_file.endswith('.csv'):
        df = pd.read_csv(data_file)
    else:
        raise ValueError("Unsupported data file format. Please provide an Excel (.xlsx) or CSV (.csv) file.")

    # Search for data related to the given roll number
    student_data = df[df['Roll Number'] == roll_number]

    if student_data.empty:
        raise ValueError(f"Roll number {roll_number} not found in the data file.")

    # Load the template image
    template = Image.open(template_image)

    # Initialize drawing context
    draw = ImageDraw.Draw(template)

    # Specify font and position for adding data
    font = ImageFont.load_default()
    position = (100, 100)  # Adjust the position as needed

    # Add data to the template
    for index, row in student_data.iterrows():
        data_to_add = f"Name: {row['Name']}\nRoll Number: {row['Roll Number']}\nScore: {row['Score']}"
        draw.text(position, data_to_add, fill="black", font=font)

    # Save the modified template
    template.save(output_file)

# Example usage:
roll_number_input = "12345"  # Replace with the desired roll number
data_file_path = "student_data.xlsx"  # Replace with your data file path
template_image_path = "certificate_template.png"  # Replace with your template image path
output_image_path = "output_certificate.png"  # Replace with the desired output file path

generate_certificate(roll_number_input, data_file_path, template_image_path, output_image_path)
