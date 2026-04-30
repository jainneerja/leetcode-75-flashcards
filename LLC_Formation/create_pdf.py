from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

doc = SimpleDocTemplate(
    "D:/AI/Velquoris/LLC_Formation/Operating_Agreement.pdf",
    pagesize=letter,
    rightMargin=inch,
    leftMargin=inch,
    topMargin=inch,
    bottomMargin=inch
)

styles = getSampleStyleSheet()

# Custom styles
title_style = ParagraphStyle('CustomTitle', parent=styles['Title'],
    fontSize=18, spaceAfter=6, textColor=colors.HexColor('#1a1a1a'), alignment=TA_CENTER)

subtitle_style = ParagraphStyle('Subtitle', parent=styles['Normal'],
    fontSize=11, spaceAfter=4, alignment=TA_CENTER, textColor=colors.HexColor('#444444'))

heading_style = ParagraphStyle('ArticleHeading', parent=styles['Heading2'],
    fontSize=11, spaceBefore=14, spaceAfter=6, textColor=colors.HexColor('#1a1a1a'),
    borderPad=4, backColor=colors.HexColor('#f0f0f0'), borderWidth=0)

body_style = ParagraphStyle('Body', parent=styles['Normal'],
    fontSize=10, spaceAfter=6, leading=14, alignment=TA_JUSTIFY)

bold_body_style = ParagraphStyle('BoldBody', parent=body_style, fontName='Helvetica-Bold')

note_style = ParagraphStyle('Note', parent=styles['Normal'],
    fontSize=9, textColor=colors.HexColor('#666666'), alignment=TA_CENTER, spaceAfter=4)

story = []

# Title
story.append(Paragraph("SINGLE-MEMBER OPERATING AGREEMENT", title_style))
story.append(Paragraph("Velquoris LLC", subtitle_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cccccc'), spaceAfter=10))

# Header info
story.append(Paragraph("<b>Effective Date:</b> April 20, 2026", body_style))
story.append(Paragraph("<b>State of Formation:</b> Washington", body_style))
story.append(Paragraph("<b>UBI Number:</b> 606 202 023", body_style))
story.append(Paragraph("<b>Governing Law:</b> RCW 25.15 (Washington Limited Liability Company Act)", body_style))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cccccc'), spaceBefore=8, spaceAfter=8))

# Article I
story.append(Paragraph("ARTICLE I — FORMATION", heading_style))
story.append(Paragraph("<b>1.1 Name:</b> The name of the Limited Liability Company is Velquoris LLC.", body_style))
story.append(Paragraph("<b>1.2 Principal Office:</b> 18505 SE Newport Way, Unit E321, Issaquah, WA 98027", body_style))
story.append(Paragraph("<b>1.3 Purpose:</b> To engage in retail sales of consumer goods and any other lawful business activity.", body_style))
story.append(Paragraph("<b>1.4 Duration:</b> Perpetual, unless dissolved pursuant to this Agreement or Washington law.", body_style))
story.append(Paragraph("<b>1.5 Registered Agent:</b> Neha Jain, 18505 SE Newport Way, Unit E321, Issaquah, WA 98027", body_style))

# Article II
story.append(Paragraph("ARTICLE II — MEMBER", heading_style))
story.append(Paragraph("<b>2.1 Sole Member:</b> Velquoris LLC has one (1) member:", body_style))

member_table = Table(
    [["Member", "Address", "Ownership Interest"],
     ["Neha Jain", "18505 SE Newport Way, Unit E321,\nIssaquah, WA 98027", "100%"]],
    colWidths=[1.5*inch, 3.5*inch, 1.5*inch]
)
member_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1a1a1a')),
    ('TEXTCOLOR', (0,0), (-1,0), colors.white),
    ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
    ('FONTSIZE', (0,0), (-1,-1), 9),
    ('ALIGN', (0,0), (-1,-1), 'CENTER'),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cccccc')),
    ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.HexColor('#f9f9f9'), colors.white]),
    ('PADDING', (0,0), (-1,-1), 6),
]))
story.append(member_table)
story.append(Spacer(1, 6))
story.append(Paragraph("<b>2.2 Membership Interest:</b> The sole member holds 100% of the membership interest in the LLC.", body_style))
story.append(Paragraph("<b>2.3 Additional Members:</b> No additional members may be admitted without amending this Agreement.", body_style))

# Article III
story.append(Paragraph("ARTICLE III — CAPITAL CONTRIBUTIONS", heading_style))
story.append(Paragraph("<b>3.1 Initial Contribution:</b> The Member may contribute cash, property, or services as deemed necessary to operate the LLC. No specific initial contribution is required.", body_style))
story.append(Paragraph("<b>3.2 Additional Contributions:</b> The Member may make additional capital contributions at any time at their sole discretion.", body_style))
story.append(Paragraph("<b>3.3 No Interest on Contributions:</b> No interest shall be paid on capital contributions.", body_style))

# Article IV
story.append(Paragraph("ARTICLE IV — DISTRIBUTIONS", heading_style))
story.append(Paragraph("<b>4.1 Distributions:</b> The Member may withdraw or distribute profits from the LLC at any time and in any amount, at their sole discretion, provided the LLC remains solvent.", body_style))
story.append(Paragraph("<b>4.2 Limitations:</b> No distribution shall be made if it would render the LLC unable to pay its debts as they become due in the ordinary course of business.", body_style))

# Article V
story.append(Paragraph("ARTICLE V — MANAGEMENT", heading_style))
story.append(Paragraph("<b>5.1 Member-Managed:</b> Velquoris LLC shall be managed by its Member. The Member has full authority to:", body_style))
for item in ["Open and manage bank accounts", "Enter into contracts on behalf of the LLC",
             "Hire and fire employees or contractors", "Purchase, lease, or sell assets",
             "Make all business decisions on behalf of the LLC"]:
    story.append(Paragraph(f"&nbsp;&nbsp;&nbsp;&nbsp;• {item}", body_style))
story.append(Paragraph("<b>5.2 Authority to Bind:</b> The Member is authorized to sign contracts, agreements, and legal documents on behalf of the LLC.", body_style))
story.append(Paragraph("<b>5.3 Compensation:</b> The Member may receive reasonable compensation for services rendered to the LLC.", body_style))

# Article VI
story.append(Paragraph("ARTICLE VI — TAX TREATMENT", heading_style))
story.append(Paragraph("<b>6.1 Disregarded Entity:</b> As a single-member LLC, Velquoris LLC shall be treated as a disregarded entity for federal income tax purposes. All profits and losses shall be reported on the Member's personal tax return (Schedule C, Form 1040).", body_style))
story.append(Paragraph("<b>6.2 EIN:</b> The LLC has obtained Employer Identification Number (EIN) from the IRS for banking and business purposes.", body_style))
story.append(Paragraph("<b>6.3 Tax Elections:</b> The Member may elect to have the LLC taxed as an S-Corporation or C-Corporation at any time by filing the appropriate IRS forms. Consult a CPA before making this election.", body_style))

# Article VII
story.append(Paragraph("ARTICLE VII — BOOKS AND RECORDS", heading_style))
story.append(Paragraph("<b>7.1 Recordkeeping:</b> The LLC shall maintain accurate books and records of all financial transactions, including:", body_style))
for item in ["Bank statements", "Invoices and receipts", "Annual Profit & Loss statements", "Inventory records"]:
    story.append(Paragraph(f"&nbsp;&nbsp;&nbsp;&nbsp;• {item}", body_style))
story.append(Paragraph("<b>7.2 Separate Finances:</b> The Member agrees to maintain separate bank accounts for LLC and personal finances and shall not commingle funds.", body_style))
story.append(Paragraph("<b>7.3 Fiscal Year:</b> The LLC's fiscal year shall be the calendar year (January 1 – December 31).", body_style))

# Article VIII
story.append(Paragraph("ARTICLE VIII — TRANSFERS", heading_style))
story.append(Paragraph("<b>8.1 Transfer of Interest:</b> As a single-member LLC, the Member may transfer, sell, or assign their membership interest at their sole discretion.", body_style))
story.append(Paragraph("<b>8.2 Death or Incapacity:</b> Upon the death or permanent incapacity of the Member, the LLC's membership interest shall pass to the Member's legal heirs or estate, who may continue or dissolve the LLC.", body_style))

# Article IX
story.append(Paragraph("ARTICLE IX — DISSOLUTION", heading_style))
story.append(Paragraph("<b>9.1 Voluntary Dissolution:</b> The Member may dissolve the LLC at any time by filing a Certificate of Dissolution with the Washington Secretary of State.", body_style))
story.append(Paragraph("<b>9.2 Winding Up:</b> Upon dissolution, the LLC shall pay all outstanding debts and liabilities before distributing remaining assets to the Member.", body_style))

# Article X
story.append(Paragraph("ARTICLE X — INDEMNIFICATION", heading_style))
story.append(Paragraph("<b>10.1</b> The LLC shall indemnify and hold harmless the Member from any claims, damages, or liabilities arising from actions taken in good faith on behalf of the LLC, to the fullest extent permitted by Washington law.", body_style))

# Article XI
story.append(Paragraph("ARTICLE XI — AMENDMENTS", heading_style))
story.append(Paragraph("<b>11.1</b> This Agreement may be amended at any time by a written amendment signed by the Member.", body_style))

# Signature Block
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cccccc'), spaceBefore=16, spaceAfter=10))
story.append(Paragraph("SIGNATURE", heading_style))
story.append(Paragraph("By signing below, the Member adopts this Operating Agreement as the governing document of Velquoris LLC.", body_style))
story.append(Spacer(1, 20))

sig_table = Table(
    [["Signature:", "___________________________________________"],
     ["Printed Name:", "Neha Jain"],
     ["Title:", "Sole Member & Manager"],
     ["Date:", "___________________________________________"]],
    colWidths=[1.5*inch, 4*inch]
)
sig_table.setStyle(TableStyle([
    ('FONTNAME', (0,0), (0,-1), 'Helvetica-Bold'),
    ('FONTSIZE', (0,0), (-1,-1), 10),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('TOPPADDING', (0,0), (-1,-1), 8),
    ('BOTTOMPADDING', (0,0), (-1,-1), 8),
]))
story.append(sig_table)

story.append(Spacer(1, 20))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cccccc'), spaceAfter=8))
story.append(Paragraph("This Operating Agreement is an internal document and is NOT filed with the State of Washington.", note_style))
story.append(Paragraph("Retain a signed copy for your records and provide a copy to your bank when opening a business account.", note_style))

doc.build(story)
print("PDF created successfully: D:/AI/Velquoris/LLC_Formation/Operating_Agreement.pdf")
