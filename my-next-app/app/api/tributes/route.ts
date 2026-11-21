import { NextRequest, NextResponse } from 'next/server';
import { addTribute, getAllTributes } from '@/lib/csv';

export async function POST(request: NextRequest) {
  try {
    const { author, relationship, message } = await request.json();

    if (!author || !message) {
      return NextResponse.json(
        { error: 'Author and message are required' },
        { status: 400 }
      );
    }

    const tribute = await addTribute({
      author: author.trim(),
      relationship: relationship?.trim() || '',
      message: message.trim(),
    });

    return NextResponse.json(tribute, { status: 201 });
  } catch (error: any) {
    console.error('Error creating tribute:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create tribute' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const tributes = await getAllTributes();
    return NextResponse.json(tributes, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching tributes:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch tributes' },
      { status: 500 }
    );
  }
}
