export default interface BasicFormLayoutsItemType {
  name: string;
  email: string;
  message: string;
  reason?: string; // Dropdown for Advanced form
  contactMethod?: string; // Radio group for Advanced form
  agreeTerms?: boolean; // Checkbox for Advanced form
  callbackDate?: Date | null; // Date picker for Advanced form
}