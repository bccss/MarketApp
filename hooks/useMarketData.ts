import { mockCategories, mockServices } from '@/constants/mockData'

export const fetchServices = async (category?: string) => {
    if (!category || category === 'all') {
        return mockServices
    }
    // Simplified filtering for mock purposes
    return mockServices.filter(service =>
        service.title.toLowerCase().includes(category.toLowerCase()) ||
        category.toLowerCase() === 'all'
    )
}

export const fetchCategories = async () => mockCategories
