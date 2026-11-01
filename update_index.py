import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update hero button href
content_new = content.replace(
    '<a href="#portfolios-section" class="btn btn-gold">',
    '<a href="produk.html" class="btn btn-gold">'
)

# 2. Find start and end of portfolios-section
start_marker = '<!-- Section 1: Specialized B2B Export Portfolios -->'
next_marker = '<!-- Section 3: Business Contact Form'

start_idx = content_new.find(start_marker)
next_idx = content_new.find(next_marker)

if start_idx != -1 and next_idx != -1:
    content_new = content_new[:start_idx] + content_new[next_idx:]
    print("Successfully removed portfolios-section from index.html")
else:
    print(f"Error finding markers: start_idx={start_idx}, next_idx={next_idx}")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content_new)

print("index.html updated successfully!")
