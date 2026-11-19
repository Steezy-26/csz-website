const toPeople = (rows) => rows.map(([name, role, img]) => ({ name, role, img }))

export const council = toPeople([
  ['Freddy Ndhlovu', 'President', '2024/10/rsz_dsc_8418.jpg'],
  ['William Nyakudya', 'Vice President', '2024/10/rsz_dsc_8424.jpg'],
  ['Alfred Gono', 'Secretary', '2024/10/rsz_1dsc_8411.jpg'],
  ['Velempini Tjiyapo', 'Treasurer', '2024/10/rsz_dsc_8467.jpg'],
  ['Viola Dondo', 'Executive Director', '2024/10/rsz_dsc_8473.jpg'],
  ['Joice Benza', 'Council Member', '2024/10/rsz_dsc_8461.jpg'],
  ['Miriam Chahuruva', 'Council Member', '2024/10/rsz_dsc_84371.jpg'],
  ['William Mugobogobo', 'Council Member', '2024/10/rsz_dsc_8436.jpg'],
  ['Leslie Mukarati', 'Council Member', '2024/10/rsz_dsc_83881.jpg'],
  ['Ashley Chimhanda', 'Harare Chapter Chair', '2024/10/rsz_dsc_8455.jpg'],
  ['Mduduzi Gwebu', 'Bulawayo Chapter Chair', '2023/07/rsz_thebless010829.jpg'],
  ['Atwell Mukusha', 'Diaspora Chapter Chair', '2025/08/rsz_atwell.jpg'],
  ['Beauty Garaba', 'Women in ICT Chapter Chair', '2025/08/rsz_whatsapp_image_2025-08-14_at_115342_40cfdc6a.jpg'],
])

export const secretariat = toPeople([
  ['Viola Dondo', 'Executive Director', '2025/11/DSC_73051.jpg'],
  ['Takudzwa Gatsi', 'Technical Administrator', '2025/11/rsz_dsc_707711.jpg'],
  ['Nozipho Mloyi', 'E-Learner Manager', '2025/11/rsz_dsc_70901.jpg'],
  ['Faith Mudzingaidzwa', 'CSZ Administrator', '2025/11/rsz_dsc_72751.jpg'],
  ['Steve Chawatama', 'Finance & Membership Officer', '2025/11/rsz_dsc_72131.jpg'],
  ['Tendai Muzvondiwa', 'ICDL Administrator', '2025/11/rsz_dsc_71421.jpg'],
])

export const chapters = {
  harare: toPeople([
    ['Kudzai Zisengwe', 'Chapter Chair', '2025/11/rsz_dsc_7103.jpg'],
    ['Sithabile Sibanda', 'Vice Chair', '2025/11/rsz_1thebless001597.jpg'],
    ['Cleopatra Taaziva', 'Secretary', '2025/11/rsz_dsc_7050.jpg'],
    ['Ronny Murahwa', 'Treasurer', '2026/09/WhatsApp-Image-2026-09-07-at-09.12.18.jpeg'],
    ['Primrose Chivere', 'Committee Member', '2025/11/rsz_dsc_7217.jpg'],
    ['Daisy Matyatya', 'Committee Member', '2025/09/Daisy.jpeg'],
    ['Panimaha Dube', 'Committee Member', '2026/09/WhatsApp-Image-2026-09-07-at-09.02.03.jpeg'],
  ]),
  bulawayo: toPeople([
    ['Calipher Ndlovu', 'Chapter Chair', '2025/11/rsz_thebless001594.jpg'],
    ['Leona Dimairo', 'Vice Chair', '2025/11/rsz_thebless001599.jpg'],
    ['Mduduzi Gwebu', 'Secretary', '2025/11/rsz_thebless010190.jpg'],
    ['Prof Vusumuzi Maphosa', 'Treasurer', '2025/11/Prof.jpg'],
    ['Percy Sibanda', 'Committee Member', '2025/11/rsz_thebless001603.jpg'],
    ['Sizalobuhle Sibanda', 'Committee Member', '2026/09/Sizalobuhle-Sibanda-CSZ.png'],
    ['Njabulo Ndlovu', 'Committee Member', '2025/11/Njabulo.jpg'],
    ['Taz Chikwakwata', 'Committee Member', '2025/11/Taz.jpg'],
  ]),
  wictz: toPeople([
    ['Daisy Matyatya', 'Chapter Chair', '2025/09/Daisy.jpeg'],
    ['Beauty Garaba', 'Vice Chapter Chair', '2025/09/DSC_7231.jpg'],
    ['Tapiwa Mawoyo', 'Secretary', '2025/09/DSC_7068.jpg'],
    ['Maggie Paradza', 'Treasurer', '2025/09/DSC_7131.jpg'],
    ['Dr Louisa Mpauri', 'Committee Member', '2025/11/Doc-Louisa-.jpg'],
    ['Yvonne Nhachi', 'Committee Member', '2026/09/Yvonne-Nhachi.jpeg'],
    ['Edith Utete', 'Committee Member', '2026/09/WhatsApp-Image-2026-09-03-at-10.20.27.jpeg'],
    ['Tarisai Madaba', 'Committee Member', '2026/09/WhatsApp-Image-2026-09-04-at-12.56.10.jpeg'],
  ]),
}
