import { ref, database, update, push} from "./firebaseConfig";

async function saveStructuredData(data){
  const updates = {};
  for(const faq of data.faq || []){
    const faqRef = ref(database, "faq");
    const newKey = push(faqRef).key;
    updates[`data/faq/${newKey}`] = {
      ...faq,
      id: faq.id||newKey

    };

  }
  for (const faculty of data.faculty || []) {
    updates[`data/faculty/${faculty.id || push(ref(database, "faculty")).key}`] = faculty;
  }

  // Departments
  for (const dept of data.departments || []) {
    updates[`data/departments/${dept.id || push(ref(database, "departments")).key}`] = dept;
  }

  // Services
  for (const service of data.services || []) {
    updates[`data/services/${service.id || push(ref(database, "services")).key}`] = service;
  }

  // Events
  for (const event of data.events || []) {
    updates[`data/events/${event.id || push(ref(database, "events")).key}`] = event;
  }

  
  // Messmenu
  for (const messMenu of data.messMenus || []) {
    updates[`data/messMenus/${messMenu.id || push(ref(database, "messMenus")).key}`] = messMenu;
  }
  // canteens
  for (const canteen of data.canteens || []) {
    updates[`data/canteens/${canteen.id || push(ref(database, "canteens")).key}`] = canteen;
  }
  // Events
  for (const company of data.companies || []) {
    updates[`data/companies/${company.id || push(ref(database, "companies")).key}`] = company;
  }
  // placementStats
  for (const placementStat of data.placementStats || []) {
    updates[`data/placementStats/${placementStat.id || push(ref(database, "placementStats")).key}`] = placementStat;
  }

  await update(ref(database), updates);
  console.log(" Saved to RTDB: ", Object.keys(updates).length, "items");

}




export default saveStructuredData